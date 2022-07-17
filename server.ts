import express, { Request, Response } from 'express';
import path from 'path';

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join( __dirname, './index.html' ) );
})

app.listen(PORT, () => console.log('App is running on port:', PORT));
