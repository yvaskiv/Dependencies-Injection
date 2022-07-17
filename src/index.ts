import { HTTP } from './services/http.js';

const renderUser = async (config: any) => {
  const { api: apiConfig } = config;
  const http = new HTTP(apiConfig);

  const user = (await http.get(apiConfig.resources.users)) as unknown as any[];

  const listNode = document.getElementById('user-list');

  user.forEach((user) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  renderUser(config);
}

app();
