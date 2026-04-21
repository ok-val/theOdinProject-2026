## Browser history

Modern browsing begins with a person named Tim Berners-Lee. Tim developed a WorldWideWeb browser while working for the European nuclear research agency known as CERN. 

Tim's browser, called Nexus, was the first to allow users to view basic style sheets, read newsgroups, and even had spellcheck! Next came Opera and Netscape. 

Internet Explorer came in 1995 and dominated the market. Netscape answer was Mozilla that who developed Firefox. Safari and Chrome came after.

## :LiCheckSquare2: Browser compatibility (Browser Engine)

Today browsers can run fully function applications. For the longest time, applications like Word and Excel could only be executed a via standalone application.

Today, we can run Docs and Sheets directly on the webpage *without installing any files*.

As companies compete for market share, *different browsers using different engines* to display information on the web. For example, **Chrome and Chromium uses Blink; Safari uses WebKit**. Even when Chrome or Firefox is downloaded onto iPads, the devices are still using Webkit to render (native to Safari). 

**∴ Because browsers use different engines,** your application may behave differently in the browser. *Due to current Chrome dominance*, the vast majority of applications are optimized for the engine that Chrome uses---Blink as performing for other browsers is secondary.

➜ So in order to ensure projects are optimized for the broadest range of users, I must make sure that I'm testing web apps against browsers which are most likely to be used by users. ~={yellow}Chrome, Safari, Firefox, and other Chromium-based browsers (Microsoft Edge, Brave, etc.) are more common among regular users.=~ This also depends on who I might be designing for.


## :LiCheckSquare2: Mobile browser compatibility

With the increasing use of mobile device for apps, it's important to optimize viewing experience for mobile versions of the same browser. 

This is easily achieved using an **emulator in the DevTools console**.
Even so, not all specs are reproducible via this tool. And usually, it is best tested on the native devices themselves.

## Can I Use? 

[Can I use...?](https://caniuse.com/) is a resource to help validate if new features are supported by browsers. 

New features---especially ~={blue}CSS, HTML, and JS APIs=~---roll out continuously through ~={blue}W3C and WHATWG=~, but only to become useful when browsers ship support. *And their timelines are very different*.

**How often?** The standard app production never stops. There is now more competition than there ever has, and it pushes developers to compete on capability. 

While prototypes can roll out everyday, Firefox and Chrome have release cycles *roughly every four weeks*. 

[Can I use...?](https://caniuse.com/) is helpful because it keeps devs up-to-date about which new feature is or is not supported, which versions support which feature, mobile vs desktop differences and so on. Consider the scenarios: 

- A feature may be standardized but not implemented
- A feature may be implemented but buggy
- A feature may be implemented only in Chromium but not Safari
- Mobile Safari may lag behind desktop Safari

