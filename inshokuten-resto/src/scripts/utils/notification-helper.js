const NotificationHelper = {

  sendNotification({ name, options }) {
    // Pengecekan apakah browser mendukung notifikasi.
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    // Pengecekan apakah fitur notifikasi diijinkan. Jika belum, lakukan permohonan perizinan.
    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    // Menampilkan notifikasi.
    this._showNotification({ name, options });
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({ name, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(name, options);
  },
};

export default NotificationHelper;
