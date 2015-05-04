# Device

A meteor package for querying information about the current device.

**This is an early alpha release**

## Installation
```javascript
$ meteor add mikael:device
```
## Usage

#### CSS
On touch devices, a CSS class named `touch-device` is attached to the HTML element. This enables touch/non-touch
specific CSS selectors. For example, you can attach define CSS for a `:hover` pseudo on all non-touch devices
like this:
```css
html:not(.touch-device) .menu-item:hover {
  color: red;
}
```

Or, the opposite, to specifically select touch devices:
```css
html.touch-device .menu-item {
  color: red;
}
```

#### Javascript
Check if the current device is a touch device
```javascript
Device.isTouch // boolean
```

Check the orientation of the current device
```javascript
Device.orientation // "portrait" or "landscape"
```

Check if the height and width of the current device is the same as a particular make/model
```javascript
Device.resolution.iphone3 // boolean
Device.resolution.iphone4 // boolean
Device.resolution.iphone5 // boolean
Device.resolution.iphone6 // boolean
Device.resolution.iphone6plus // boolean
Device.resolution.ipad // boolean
Device.resolution.nexus5 // boolean
Device.resolution.galaxys5 // boolean
```

Check if the height of the current device is the same as a particular make/model
```javascript
Device.width.iphone3 // boolean
Device.width.iphone4 // boolean
Device.width.iphone5 // boolean
Device.width.iphone6 // boolean
Device.width.iphone6plus // boolean
Device.width.ipad // boolean
Device.width.nexus5 // boolean
Device.width.galaxys5 // boolean
```

Check if the width of the current device is the same as a particular make/model
```javascript
Device.height.iphone3 // boolean
Device.height.iphone4 // boolean
Device.height.iphone5 // boolean
Device.height.iphone6 // boolean
Device.height.iphone6plus // boolean
Device.height.ipad // boolean
Device.height.nexus5 // boolean
Device.height.galaxys5 // boolean
```

## References
[iOS Resolution Quick Reference](http://www.iosres.com/)
[The Ultimate Guide To iPhone Resolutions](http://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)
[iPhone 6 Screens Demystified](http://www.paintcodeapp.com/news/iphone-6-screens-demystified)
