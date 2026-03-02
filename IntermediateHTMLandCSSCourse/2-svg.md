## Intro to SVG

SVGs are scalable image format. They can scale more easily than rasterized images because they are defined by math. 

This means that they are created programmatically using **XML (Extensible Markup Language)**. XML is very much like HTML but used for different reasons.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

[Feather Icons](https://feathericons.com/) and [Material Icons](https://fonts.google.com/icons) are free icon libraries. 


### Drawbacks

SVGs are remarkably inefficient at rendering complex image. 


### Anatomy of an SVG

`xmlns` stands for XML NameSpace. It boilerplates the dialect (spec) of the SVG. 

`viewBox` defines the bound of the vector file, the aspect ratio, and origin of the SVG.

`class`, `id` are attributes, HTML-like (can be used by CSS).

SVG elements such as `<circle>`, `<rect>`, `<path>`, `<text>` are the basic building blocks. Here is a [complete list of SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element). You can create extremely complex images with these elements.

SVG attributes such as `fill` and `stroke` can be accessed using CSS. Here's the [guide on using SVG attributes](https://css-tricks.com/svg-properties-and-css/). 


### Embedding SVGs

Linking SVGs work basically the same way as linking HTML images using the tag <img> or have it embedded in the background. However, we cannot edit the content of the SVG 

It's easier to *inline* the SVG by constructing it in the HTML space itself. This unlocks inline construction but might cause delay for complex images. React, a front-end JS library, can help mitigate this issue down the line.

---

[Prev](1-emmet.md) | [Next](3-tables.md)
