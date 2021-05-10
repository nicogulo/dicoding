import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {

  // method init
  init(url) {
    // membuat instance WebSocket
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  // callback event onmessage untuk menampilkan data
  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};
export default WebSocketInitiator;
