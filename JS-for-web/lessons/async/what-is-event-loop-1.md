---
source: https://www.youtube.com/watch?v=eiC58R16hb8
---

## Microtask Queue

The Microtask Queue was also shipped as part of ES2015 (ES6).

Microtask Queue (used by Promise handlers and async functions or 
queueMicrotask()) is prioritized over the Task Queue (used by 
conventional callbacks).

Meaning that the Microtask Queue needs to emptied before the Task Queue
can begin.