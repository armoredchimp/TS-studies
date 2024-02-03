import { Server } from './server';

class Launcher {
  private server: Server = new Server()

  public launchApp() {
    this.server.startServer()
  }
}
console.log('1')
new Launcher().launchApp();