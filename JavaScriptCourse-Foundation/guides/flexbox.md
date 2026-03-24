
> [!info] Flexbox
> In the flex layout model, *the children of a flex container can be laid out in any direction (or axis), and can flex their sizes*, either growing to fill unused space or shrinking to prevent overflowing from the parent. 

Whenever a container block is set to `display: flex;`, **all children items become *flex items*** (i.e., their sizes become unknown or dynamic). 

~={yellow}The main idea of a flexbox is give the container the ability to alter its items width/height to best fill the available space.=~ That is, the flexbox (container) layout is **direction-agnostic** as opposed to the regular layouts (*block which vertically-based* and *inline which is horizontally-based*). Here are some more differences between them.

| Layout Type | Flow Direction                                 | Size Behavior                                                         | Alignment Options                                                               | Can Wrap?         | Notes                                                              |
| ----------- | ---------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| **Block**   | *Vertical* (top → bottom)                      | Expands to fill **inline** width; height grows with content           | Limited (text-align for inline content; margin auto for horizontal centering)   | No                | Traditional document flow; each element starts on a new line       |
| **Inline**  | *Horizontal* (left → right)                    | Width/height defined by content; cannot set vertical margins reliably | Very limited; baseline alignment rules                                          | No                | Elements flow like text; cannot accept width/height normally       |
| **Flex**    | *Direction‑agnostic* (set by `flex-direction`) | Items can grow/shrink (`flex-grow`, `flex-shrink`, `flex-basis`)      | Rich alignment: `justify-content`, `align-items`, `align-content`, `align-self` | Yes (`flex-wrap`) | Component‑level layout; ideal for dynamic, responsive arrangements |

### Default settings

```css
justify-content: space-between;
align-items: stretch;
flex-wrap: nowrap;
```

