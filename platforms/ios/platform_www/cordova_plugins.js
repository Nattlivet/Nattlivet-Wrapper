cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-browsertab.BrowserTab",
      "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
      "pluginId": "cordova-plugin-browsertab",
      "clobbers": [
        "cordova.plugins.browsertab"
      ]
    },
    {
      "id": "cordova-plugin-buildinfo.BuildInfo",
      "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
      "pluginId": "cordova-plugin-buildinfo",
      "clobbers": [
        "BuildInfo"
      ]
    },
    {
      "id": "cordova-plugin-customurlscheme.LaunchMyApp",
      "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
      "pluginId": "cordova-plugin-customurlscheme",
      "clobbers": [
        "window.plugins.launchmyapp"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCMPlugin"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Coordinates",
      "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Position",
      "file": "plugins/cordova-plugin-geolocation/www/Position.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "window.WkWebView"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-buildinfo": "4.0.0",
    "cordova-plugin-customurlscheme": "5.0.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-fcm-with-dependecy-updated": "4.1.1",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-wkwebview-engine": "1.2.1"
  };
});