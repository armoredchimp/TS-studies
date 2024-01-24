abstract class BaseServer {
  // private port: number;
  // private address: string;
  constructor(private port: number, private address: string) {
    this.port = port;
    this.address = address;
  }

  startServer() {
    console.log(`Starting server at: ${this.address}: ${this.port}`)
  }

  abstract stopServer(): void
}

class DbServer extends BaseServer {
  constructor(port: number, address: string) {
    super(port, address)
  }
  stopServer() {
    console.log(`stopped`)
  }
}


const someServer = new DbServer(8080, 'localhost')
someServer.startServer();
const somePort = (someServer as any).port; // Access granted anyway despite private
