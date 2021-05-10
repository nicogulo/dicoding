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
    const restaurants = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurants.name} is on cinema!`,
      options: {
        body: restaurants.overview,
        image: `${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}`,
      },
    });
  },
};
export default WebSocketInitiator;
