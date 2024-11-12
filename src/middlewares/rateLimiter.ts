import { NextFunction, Request, Response } from "express";
import { get } from "lodash";

// In-memory data store
type IpHitTable = {
    [key: string]: {
        count: number;
        timestamp: number;
    }
}
const ipHitTable: IpHitTable = {}

const LIMIT = 10; // Number of requests
const WINDOW_TIME = 60 * 1000; // 1 minutes in milliseconds

const rateLimitter = (req: Request, res: Response, next: NextFunction): void => {
    const ip: string = req.ip || (req.headers['CF-Connecting-IP'] as string);
    const currentTimestamp = Date.now();

    const hitRecord = get(ipHitTable, ip);
    if (!hitRecord) {
        ipHitTable[ip] = {
            count: 1,
            timestamp: currentTimestamp
        }
        return next();
    }

    const diffSinceLastRequest = currentTimestamp - hitRecord.timestamp;

    // check rate limit case first
    if (diffSinceLastRequest < WINDOW_TIME && hitRecord.count >= LIMIT) {
        res.status(429).json({
            success: false,
            reason: 'Too many request, take it easy!'
        })
        return;
    }

    // Modify count
    if (diffSinceLastRequest > WINDOW_TIME) {
        ipHitTable[ip] = {
            count: 1,
            timestamp: currentTimestamp
        }
    } else if (diffSinceLastRequest < WINDOW_TIME) {
        ipHitTable[ip].count++;
    }
    next();
}

export default rateLimitter;
