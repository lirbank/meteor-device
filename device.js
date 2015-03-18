Device = {
  orientation: undefined,
  isTouch: ('ontouchmove' in document.documentElement),
  resolution: {},
  width: {},
  height: {},
  _devices: {
    iphone3: {width: 320, height: 480, pixelRatio: 2}, // iPhone 3G, iPhone 3GS
    iphone4: {width: 320, height: 480, pixelRatio: 2}, // iPhone 4, iPhone 4s
    iphone5: {width: 320, height: 568, pixelRatio: 2}, // iPhone 5, iPhone 5c, iPhone s
    iphone6: {width: 375, height: 667, pixelRatio: 2},
    iphone6plus: {width: 414, height: 736, pixelRatio: 3, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_10_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4'},
    ipad: {width: 768, height: 1024, pixelRatio: 2, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_10_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4'},
    nexus5: {width: 360, height: 592, pixelRatio: 3, userAgent: 'Mozilla/5.0 (Linux; Android 5.0; Google Nexus 5 - 5.0.0 - API 21 - 1080x1920 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36'},
    galaxys5: {width: 360, height: 640, pixelRatio: 3, userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; Samsung Galaxy S5 - 4.4.4 - API 19 - 1080x1920 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'},
  },
  setOrientation: function () {
    /*
    // TODO: Does not work with android (height and width properties have not
    // updated at the time the orientationChange event fires).
    if ($(window).width() > $(window).height()) {
      this.orientation = 'landscape';
    } else {
      this.orientation = 'portrait';
    }
    */
    if (typeof orientation === 'number') {
      if (orientation === 0) {
        this.orientation = 'landscape';
      } else {
        this.orientation = 'portrait';
      }
    }
  }
};

// Add an 'isDeviceName' property for each device (ex
// Device.resolution.isIphone6 and Device.width.isIphone6)
for (var prop in Device._devices) {
  var width = Device._devices[prop].width;
  var height = Device._devices[prop].height;
  var newProp = 'is' + prop.charAt(0).toUpperCase() + prop.slice(1);

  Device.width[newProp] = false;
  if (screen.width === width) {
    Device.width[newProp] = true;
  }

  Device.height[newProp] = false;
  if (screen.height === height) {
    Device.height[newProp] = true;
  }

  Device.resolution[newProp] = false;
  if (screen.width === width && screen.height === height) {
    Device.resolution[newProp] = true;
  }
}

// Init orientation and update is as it changes
Device.setOrientation();
$(window).on('orientationchange', function () {
  Device.setOrientation();
});

// Add a CSS class to the html element of touch devices
if (Device.isTouch) {
  $(document).ready(function () {
    $('html').addClass('touch-device');
  });
}
