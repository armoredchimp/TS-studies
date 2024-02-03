"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.server = new server_1.Server();
    }
    Launcher.prototype.launchApp = function () {
        this.server.startServer();
    };
    return Launcher;
}());
new Launcher().launchApp();
