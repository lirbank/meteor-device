Device = {
  orientation: (document.width > document.height ? 'landscape' : 'portrait'),
  isTouchDevice: ('ontouchmove' in document.documentElement),
  resolution: {
    isIphone: false,
    isIphone3: false,
    isIphone4: false,
    isIphone5: false,
    isIphone6: false,
    isIphone6plus: false,
    isIpad: false,
    isIpadMini: false,
  }
};
if (screen.width === 320 && screen.height === 480) {
  Device.resolution.isIphone = true;
  Device.resolution.isIphone3 = true;
  Device.resolution.isIphone4 = true;
}
if (screen.width === 320 && screen.height === 568) {
  Device.resolution.isIphone = true;
  Device.resolution.isIphone5 = true;
}
if (screen.width === 375 && screen.height === 667) {
  Device.resolution.isIphone = true;
  Device.resolution.isIphone6 = true;
}
if (screen.width === 768 && screen.height === 1024) {
  Device.resolution.isIpad = true;
  Device.resolution.isIpadMini = true;
}

// Update the orientation as it changes
$(window).on('orientationchange', function () {
  if (document.width > document.height) {
    Device.orientation = 'landscape';
  } else {
    Device.orientation = 'portrait';
  }
});

// Add a CSS class to the body element of touch devices
if (Device.isTouchDevice) {
  $(document).ready(function () {
    $('body').addClass('touch-device');
  });
}
