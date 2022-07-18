import { HTTP } from './http';

export class Users {
  http: any;
  apiConfig: any;

  constructor(apiConfig: any) {
    this.http = new HTTP(apiConfig);
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as any[];
  }
}
