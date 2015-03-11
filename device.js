Device = {
  orientation: 'portrait',
  isIphone4: false,
  isIphone5: false,
  isIphone6: false,
  isIphone6plus: false
};
if (screen.width > screen.height) {
  Device.orientation = 'landscape';
}
if (screen.width === 320 && screen.height === 480) {
  Device.isIphone4 = true;
}
if (screen.width === 320 && screen.height === 568) {
  Device.isIphone5 = true;
}
if (screen.width === 375 && screen.height === 667) {
  Device.isIphone6 = true;
}
