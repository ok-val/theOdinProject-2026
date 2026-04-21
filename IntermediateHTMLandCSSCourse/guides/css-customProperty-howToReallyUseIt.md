---
doc-type: tutorial
sources: |-
  https://www.youtube.com/watch?v=_2LwjfYc1x8,
  https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/
---
## Problem

This tutorial is provided by Kevin Powell. Link in YAML front matter.

It's intuitive to include all of custom variables in the root.
Where each variable needs a selector.
This is accessible for beginners to use custom properties.

For example, imagine having three feature cards. 
Each card contains an icon, a shadow, and a button. 
All of which needs a color assigned.

The conventional approach would be to select each of those components
and assign the colors for them individually. 

**This approach is verbose because each variable needs a selector,**
making it harder to maintain...

## Solution

Instead, I could create a private custom property for a pseudo-master class.
That declaration uses something Kevin calls a private custom property. 
It acts like a global custom var which exists in the root, 
**But all it does is redirection.**

**Think of this as a routing technique for pointing to a central router.**
The original article is by Lea Verou. See link [here](https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/).
~={yellow}:LiBookmarkPlus: Revisit recommended=~



> [!tip] Tips from Kevin's tutorial
> I noticed that Kevin specifies his class name as such: `.plan--variation`
> And he specifies his class elements as such: `.plan__element`.



