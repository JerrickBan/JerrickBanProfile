import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express.js with TypeScript!');
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});