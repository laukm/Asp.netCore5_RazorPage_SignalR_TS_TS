"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalR = require("@microsoft/signalr");
var counter = document.getElementById("viewCounter");
// create connection
var connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub/view")
    .build();
// on view update message from client
connection.on("viewCountUpdate", function (value) {
    counter.innerText = value.toString();
});
// notify server we're watching
function notify() {
    connection.send("notifyWatching");
}
// start the connection
function startSuccess() {
    console.log("Connected.");
    notify();
}
function startFail() {
    console.log("Connection failed.");
}
connection.start().then(startSuccess, startFail);
//# sourceMappingURL=home.js.map