import fs from 'fs';
import path from 'path';

export const getUsers = () => {
  try {
    const users = fs.readFileSync(path.join(process.cwd(), '/server/data/mock_users.json'), 'utf8');
console.log('__users__FROM FILE', users);

    return JSON.parse(users);
    
  } catch (error) {
    console.log('Cannot read mocked users file', error);
  }
}
