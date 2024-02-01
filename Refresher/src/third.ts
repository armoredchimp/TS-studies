import { Comp1 } from './data/comp1/comp1';

export interface Iserver {
  startServer(): void
  stopServer(): void
}

class Server implements Iserver {
  protected port: number;
  protected address: string;
  public date: any;
  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  async startServer() {
    console.log(`Starting server at: ${this.address}: ${this.port}`)
    return function () {

    }
  }

  stopServer(): void { }
}

class DataServer extends BaseServer {
  constructor(port: number, address: string) {
    super(port, address)
  }
  stopServer() {
    console.log(`stopped`)
  }
}


const Server1: Iserver = new Server(8080, 'localhost')
Server1.startServer();

