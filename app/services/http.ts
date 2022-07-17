import { Logger } from './logger.js';

export class HTTP {
  logger: any;

  constructor() {
    this.logger = new Logger();
  }

  async get(url: string) {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      this.logger.error(`Status: ${response.status}. Users: ${response.statusText}`);
    }
  }
}
