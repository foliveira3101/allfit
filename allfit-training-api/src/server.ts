import App from "./app"

import  { Routes } from './routes/index.router'
import  { ExerciceRoutes } from './routes/exercice.router'


const PORT = 7000

const app = new App(
    [
      new Routes(),
      new ExerciceRoutes(),
    ],
    PORT,
  );

app.listen()


process.once('SIGUSR2', () => app.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')))
process.once('SIGINT', () => app.closedataBaseConnection('connection crashed', () => process.exit(0)))