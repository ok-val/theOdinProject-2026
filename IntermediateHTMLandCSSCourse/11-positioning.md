## Different types of positioning

| Position value | What it’s relative to                                                                   | In normal document flow? | When offsets (`top/right/bottom/left`) apply | Key behaviors & use cases                                                                    |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **static**     | The normal flow of the document                                                         | **Yes**                  | Offsets are ignored                          | Default mode; elements appear where they naturally fall.                                     |
| **relative**   | Its **own original position** in the normal flow                                        | **Yes**                  | Offsets shift it _relative to itself_        | Useful for small nudges or as a positioning context for absolutely positioned children.      |
| **absolute**   | The **nearest positioned ancestor** (or the viewport if none)                           | **No**                   | Offsets place it relative to that ancestor   | Removed from flow; great for overlays, icons, captions. Should not be used for full layouts. |
| **fixed**      | The **viewport**                                                                        | **No**                   | Offsets lock it to a spot on screen          | Stays put while scrolling; ideal for navbars, chat buttons, floating UI.                     |
| **sticky**     | The element’s **normal position**, until scroll passes threshold; then the **viewport** | **Yes**                  | Offsets define the “stick” threshold         | Behaves like static until scrolled; then acts like fixed. Great for section headers.         |

### Static and relative positioning

*Static* is the default position of every element. Additional properties such as `top`, `right`, `bottom`, `left` do not affect the position of the element. 

*Relative* provides a sticky anchor to displace the element relative to its default position. 


> [!info] A little-known fact about `position: relative`
> 1. It automatically uses a z-index that takes higher precedence than and therefore is on top of any statistically positioned elements. This enforcement cannot be ruled otherwise. 
> 2. It limits the scope of absolutely positioned child elements, meaning that the static position of the children will be bound to the relative position of the parent. 



### Absolute positioning

*Absolute* allows a fixed, coordinate-based positioning based on the screen coordinate. See example in the code. 

While uncommon, there are few use cases for absolute positioning:

* Modals
+ Image with a caption to be placed at an exact spot
+ Icons on top of other elements

### Fixed positioning 

Similar to fixed elements are *also removed from the normal flow of the document*, but it is positioned relative to the *viewport*. 

This is useful for a fixed header, but comes with a few tweaks to make it renderable. See this link: [Fixed Headers and Jump Links? The Solution is scroll-margin-top | CSS-Tricks](https://css-tricks.com/fixed-headers-and-jump-links-the-solution-is-scroll-margin-top/)

### Sticky positioning

This is a new tool. Fixed has been a staple for a while. While both may seem like they behave differently, there are some differences in terms of structure.

Because `position: fixed` is *affixed to the viewport*, it scrolls above the entire document structure, giving it higher z-index than other positioning. On the other hand, `position: sticky` is *bound to its parent*, making it leaves once the parent leaves the space.


> [!hint] When to use Fixed or Sticky
> **How would you want this element to move on the page?**
> 
> Use *Fixed* to make the element stay at the exact same spot throughout the page. It takes the element of the flow of the page which potentially can cover some elements (due to high z-index).
> 
> Use *Sticky* to make something scroll into view, stay, then leave at certain point. 


