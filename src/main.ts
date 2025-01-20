import express, { json } from "express";
import "dotenv/config";
import teamRouter from "./router/team-router";
import playerRouter from "./router/player-router";
import './datamakers/database-creator';

const app = express();
const port = process.env.PORT;
app.use(json());
app.use('/api', teamRouter);
app.use('/api', playerRouter);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});