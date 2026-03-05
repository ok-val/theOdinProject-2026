## APIs

APIs are ready-made code blocks that allow dev to implement programs that would otherwise be hard to implement. APIs to programming is like IKEA to homebuilding. 

*There are two types of APIs:* 

**Browser APIs**: Comes prebuilt into the browser, allowing dev to work with data surrounding the computer environment. These are a few sub-types: 

+ DOM (Document Object Model) for manipualting HTML and CSS plus other inspection + console + user prompting features
+ Geolocation for geographical information
+ Canvas and WebGL for creating 2D and 3D animations
+ Audio and Video APIs and WebRTC for hardware interaction (webcam, microphone)

**Third-party APIs**: Not built in natively. Can be acquired from somewhere on the Web. 

---
## Role of JavaScript

When a webpage is loaded, the stack (HTML, CSS, and JS) runs inside an execution environment (the browser tab). A very common use of JS is to *dynamically modify HTML and CSS to update the user interface via the DOM* (Document Object Model). 

The code needs to be compiled in the correct order for the DOM to render correctly.

---
## Interpreted versus Compiled code

A *compiled language* on the other hand are transformed---hence, compiled---into another form before being run. C/C++ are compiled into machine code that is then executed in a pure binary format. 

An *interpreted language* runs the code from the top to bottom and the result of the running code is immediately returned. The code doesn't need to be transform; it can be run directly from the browser. 

*JavaScript is an interpreted language*. The browser reads receives the JS code in its original format and runs the script directly from that. 

These approaches, however, must not confused as dichotomies, but rather two approaches that can be combined to ensure optimal performance.

⊕ Most modern JS interpreters actually use *an optimization technique called just-in-time compiling to improve performance*. This means that the code is compiled into faster, binary format while the script is being used. Because this happens strictly during run-time as an optimization technique, JS is considered to be an interpreted language. 

---
## Server-side vs Client-side code

Client-side code is code that is executed in the user's browser, while server-side code is executed on the server before being sent to the user's browser. Client-side JS reduces the need for server communication. 

Server-side code is run on the server before sending results to the client. Its results are downloaded and displayed in the browser. Examples of popular server-side web languages are ~={blue}PHP, Python, Ruby, C#, and even JavaScript=~. The popular ~={blue}Node.js=~ environment runs on the server-side and enables the execution of JavaScript code on the server.

---
## Dynamic vs Static JS

The term dynamic refers to the ability to update the display of a webpage. Server-side code *dynamically* generates new content on the server, *such as pulling data from a database*. Client-side JS *dynamically* generates new content inside the browser on the client, *such as creating a new HTML table and applying the data requested from the server*.

---
## Node.js 

Node.js is a JS runtime environment that allows JS to run outside of the web browser, that is on the server-side.

### NPM and NVM

**Node Package Manager (npm)** manages *libraries or packages* for your code. It installs dependencies (using `npm install`), manages project scripts, and handles package versions via package.json. Run `npm -v` to inspect installation status.

**Node Version Manager (nvm)** manages the Node.js runtime environment itself. It can install multiple Node.js versions (using `nvm install <version>`) and can switch between versions. Run `nvm -v` to inspect installation status.

### Installation 

```bash
nvm install lts
```

`lts` stands for long-term support, which is the most stable version with guaranteed compatibility.

### Use/Check specific versions

```bash
nvm use lts
```

Whatever version the LTS maybe will appear when we check with the node command:

```bash
node -v
```

---
## JS Data Types and Conditionals


