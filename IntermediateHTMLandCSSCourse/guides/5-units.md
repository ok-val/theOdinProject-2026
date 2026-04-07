## Reviews on Units

See the full list of units [here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units).

### Absolute units

Absolute units are fixed.
`px` is an absolute unit so are `in` and `cm`.

Note that `px` does not necessarily equal exactly one physical pixel in display. It's only roughly that size, but what's important is that it tries to render for comfortable viewing (without eye strain).[^mdn_pix] 

[^mdn_pix]:https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel 
### Relative units

`em` and `rem` are relative units for being dependent on other variables.

`1em` means `1 time the font-size of the PARENT element`, and so on. `ems` are, by definition, nested.

`1rem` means `1 time for font-size of the ROOT element`. By definition, `rem` are only nested nested under the root element.

*Rem is the recommended standard.*

### Viewport units

The units `vh` and `vw` are the viewport height and width respectively. Such that: `1vh` is the equivalent of 1% of the viewport height and so on.

These are useful if I want to *size something relative to the size of the viewport*.

## How to choose a unit though?

- [c] Try not to follow strict rules or situations for using units.
- [p] Think about HOW you want something to behave, then look for specific instructions/units to achieve that end.


> [!hint] Tips for using Units
> Here are some helpful tips from a [recommended link](https://web.archive.org/web/20251130034321/https://codyloyd.com/2021/css-units/) in this module.
> + Use `rem` for font-sizes and `px` for everything else.
> + `rem` not only makes it more manageable, but also improves accessibility via enabling dynamic zooming where different rendering modes will be triggered depending on zoom states. This is good because it leaves room for user adjustment.
> + `em` can easily result in bugs because they are parent-nested, making them more convoluted to work with. 


Below is an example of using `rem` (left) and `px` (right) for padding/margins. The difference is clear: 
- [p] The one using `rem` has paddings dynamically scaled based on the original font size. 
- [p] The one using `px` preserves the paddings on the button, removing unnecessary scaling.

![[CleanShot-2021-02-25-at-19.23.52.gif ]]


> [!question] Takeaway - A hybrid approach
> Do you want the element to scale? Y ➜ use `rem`
> Otherwise, use `px`. 








