Device = {
  orientation: (document.width > document.height ? 'landscape' : 'portrait'),
  isTouchDevice: ('ontouchmove' in document.documentElement),
  resolution: {},
  width: {},
  height: {},
  _devices: {
    iphone3: {width: 320, height: 480},
    iphone4: {width: 320, height: 480},
    iphone5: {width: 320, height: 568},
    iphone6: {width: 375, height: 667},
    iphone6plus: {width: 414, height: 736},
    ipad: {width: 768, height: 1024},
  }
};

for (var prop in Device._devices) {
  var width = Device._devices[prop].width;
  var height = Device._devices[prop].height;
  var newProp = 'is' + prop.charAt(0).toUpperCase() + prop.slice(1)

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

// Update the orientation as it changes
$(window).on('orientationchange', function () {
  if (document.width > document.height) {
    Device.orientation = 'landscape';
  } else {
    Device.orientation = 'portrait';
  }
});

// Add a CSS class to the html element of touch devices
if (Device.isTouchDevice) {
  $(document).ready(function () {
    $('html').addClass('touch-device');
  });
}
