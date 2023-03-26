export default class Messenger {
  constructor(public port: number) {}

  public messagePrint(): string {
    return `Server is running on port ${this.port}`;
  }
}
