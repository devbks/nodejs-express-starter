import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import rootRouter from './routes/api.routes';
import asyncHandler from './utils/async-hander';
import { errorHandler, rateLimitter } from './middlewares';
import path from 'path';

// Initialise express app
const app = express();

// Security middlewares
app.use(cors());
app.use(rateLimitter);

// Essential middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('common'))

// Http routes
app.use('/api', asyncHandler(rootRouter));

// Register error handling middleware
app.use(errorHandler);

export default app;