This project is a typescript express starter.

# Project Starter
Here's an overview of the folder structure and its purpose:
```
src/
├── controllers/          # Holds the app's controllers for handling routing logic
├── middlewares/          # Contains middleware functions used across the application
│   ├── errorHandler.ts   # Centralized error handling middleware
│   ├── index.ts          # Index for exporting aggregated middlewares
│   ├── rateLimiter.ts    # Middleware for rate limiting requests
├── routes/               # Contains route definitions and handlers
│   └── api.routes.ts     # API route entry point
├── utils/                # Utility functions to be used throughout the project
│   └── async-handler.ts  # Utility for error-handling async functions
├── app.ts                # App setup including middleware and routes application
└── server.ts             # Server setup and initialization

test/
└── route/
    └── root.test.ts      # Example of route tests
```

These instructions will help you set up the project on your local machine for development and testing purposes.
## Prerequisites
- Node.js: Make sure you have Node.js installed on your machine. Recommended version is 14.x or higher.
- npm: Node package manager, usually bundled with Node.js.

## Installation
- Clone this repo
- Install dependecies
- Copy `.env.example` to `.env`
- Run `yarn dev`

## Running test
- In development mode, run `yarn test:dev`
- In production mode, run `yarn test`

## Usage
API Endpoints: Define your API endpoints and their usage.
Middleware: Refer to the middlewares under src/middlewares for adding new capabilities or extending the functionality.
