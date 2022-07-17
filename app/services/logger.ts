export class Logger {
  info(message: string) {
    const date = new Date().toISOString();

    console.log(`[${date}]`, message);
  }

  error(message: string) {
    const date = new Date().toISOString();

    console.error(`[${date}]`, message);
  }
}
