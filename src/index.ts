import { HTTP } from './services/http';
import { Logger } from './services/logger';
import { Users } from './services/users';
import type { User, ApiConfig } from './types';
import { ioc } from './ioc';

const renderUsers = async (config: ApiConfig) => {
  ioc.register('config', config);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  const usersService = ioc.resolve('users',);
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  renderUsers(config.api);
};

window.onload = (event: Event) => {
  ioc.registerClass('logger', Logger);
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
