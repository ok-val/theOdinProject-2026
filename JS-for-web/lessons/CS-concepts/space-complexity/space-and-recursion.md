## Recursion and Space Complexity

**How does a call stack interact with recursive function calling?**

Every function recursion calls an additional stack, allocating new space
for that stack recursively. If a recursive function takes 2 args,
calling it would cost the space of 2 more. While this scales linearly,
it's important to keep in mind for data size of millions!

AND JS also puts a max stack size limit. So be careful with beautifully
recursing code.

Sometimes, it's just better to call 5 for loops linearly instead of
hogging space for some pure functional recursion.
