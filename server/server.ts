import express, { Request, Response } from 'express';
import path from 'path';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('dist'));

app.get('/api/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Doe'},
    { id: 3, name: 'Richard Roe'}
  ];
  res.json(users);
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join( __dirname, './index.html' ) );
});

app.listen(PORT, () => console.log('App is running on port:', PORT));
