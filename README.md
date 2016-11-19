# Mobile Webapp Example - Museum in visitor experience
This is an example of how a mobile webapp could be used to create a visitor centric app for use in the museum sector.

It is released a demo of what is possible, and an example that museums can use to inform and create their own mobile webapps. 

The code itself should be used as a reference only.

# Demo
A live demo of the last table release is available at [demo.indepth.io](https://demo.indepth.io). It is optomized for mobile and is best viewed on mobile.

# Running the example locally
Requirements:
Node 5.7+ (and nothing else)
```
npm install             -   Installs required components
npm run start           -   Starts dev server with hot reloading (default: port localhost:3000)
npm run ssr-start       -   Starts express server with universal rendering (includes build) (default: port localhost:3000)
npm run static-start    -   Starts express server with client side only content (includes build) (default: port localhost:3001)
```
# Features
- Javascript / React / Redux / Node / Webpack
- Server side rendering (aka universial rendering) for ultra fast loading
- Hardware level apis
  - Vibration
  - Notifications
  - Camera
  - Voice recognition
  - Audio player (including when locked)
  - Offline use
  - Fullscreen mode
- General features
  - Deep zoom images
  - 3d Models and rendering (via sketchfeb)
  - Material design
- Technical specs
  - React / Redux
  - Webpack build process
  - Server side rendeirng through express server
  - CSS Modules
  - PostCSS for styles
  - React Native ready (example coming soon)
  
# Rationale
We believe that the future is webapps, especially for one-time use apps such as those a museum visitor would use.
This example has been developed to showcase some of the possibilities that are currently available (Especially on Android) and will soon be available on iOS.


# Why are webapps better?
- No app store, no downloading and deleting apps
- Instant access to revelent pages. User can go directly to the page of the item they are looking at rather than navigating through an app to find it.
- Instant loading
- Can be accessed with short urls, QR Codes, NFC, EddyStone beacons and more
- Low barrier to entry, people are used to typing in URLs in their browser
- Access to many hardware level APIs
- Automatically cross platform, android, ios, android watches, google glass, tables, tizen, laptops and future proofed by default
- Just works, forever. Pages from 1993 still work in 2016 and a webapp built in 2016 will still work in 2025.
- It's javascript, the number one used web programming language

# Contributors
- [Nick Maskell](https://github.com/nickmask)
- [Gerard Chin](https://github.com/gerardmrk)
- [Rowan Savage](https://github.com/ro-savage)
