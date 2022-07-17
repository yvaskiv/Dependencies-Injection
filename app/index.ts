import { HTTP } from './services/http.js';

const renderUser = async () => {
  const http = new HTTP();

  const user = await http.get('/api/users') as unknown as any[];

  const listNode = document.getElementById('user-list');

  user.forEach((user) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

renderUser();
