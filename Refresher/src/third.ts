import { Comp1 } from './data/comp1/comp1';

function logInvocation(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const className = target.constructor.name;
  let originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    console.log(`${className}#${propertyKey} called with ${JSON.stringify(args)}`)
    const result = await originalMethod.apply(this, args);
    console.log(`${className}#${propertyKey} returned ${JSON.stringify(result)}`)
  }
}

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
    const data = await this.getData(123)
    console.log(`Starting server at: ${this.address}: ${this.port}`)

  }

  stopServer(): void { }

  @logInvocation
  async getData(id: number): Promise<string> {
    return 'special data'
  }
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

