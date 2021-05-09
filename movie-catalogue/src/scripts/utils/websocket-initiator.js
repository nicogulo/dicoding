const WebSocketInitiator = {

  // method init
  init(url) {
    // membuat instance WebSocket
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  // callback event onmessage untuk menampilkan data
  _onMessageHandler(message) {
    console.log(message.data);
  },
};
export default WebSocketInitiator;
