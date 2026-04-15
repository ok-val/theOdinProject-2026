---
doc-type: wiki-page
sources: https://web.dev/articles/font-best-practices
---
### @font-face

The `@font-face` ruleset declares the name used to refer to the font and indicates the location of the font file.

It is important to note that `@font-face` **does not automatically download** the indicated font. The download is only triggered when the font is actually used by an HTML element.

> **Key Takeaway:** Fonts are only downloaded when an element on the page requires them.

Because of this behavior, how fonts are declared in your stylesheets directly affects website performance. When optimizing for font display, you must consider how the declaration impacts when the font file arrives.

### Inline Font Declarations

Since the browser reads HTML first, it is a best practice to **inline (internalize)** font declarations and other critical styling within the `<head>` element.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Self-hosted fonts</title>
    <style>
        @font-face {
            font-family: "Open Sans";
            src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
        }

        h1 {
            font-family: "Open Sans", serif
        }
    </style>
</head>
```

By including these declarations directly in the document, the browser can discover the font requirements immediately without waiting for external CSS files to download.

### Preconnect to Third-Party Fonts

If you are using a third-party font repository, use the `preconnect` value for the `rel` attribute in your `<link>` element. This is the integration method recommended by services like [Google Fonts](https://fonts.google.com/).

- **CORS Connection:** Preconnect sends font files over a CORS connection, which is significantly faster than using the `@import` ruleset.
- **Placement:** Just like other critical resources, these links should be included as early as possible in the document.

## Self-Hosted Fonts

To implement local fonts stored within your project files, use the `@font-face` ruleset to point to the specific local file path.

It would be easy to assume that local fonts are faster to load. 
But this is not true. 

- [p] If you're self-hosting fonts, it's best to use both CDN (Content Delivery Network) and HTTP/2 to make sure self-hosted fonts deliver the expected speed advantage.
- [p] Your unicode range can also impact performance, make sure to know which language the page to use just the right unicode subset.

### WOFF / WOFF2

WOFF stands for Web Open Font Format is a compressed font format designed for web pages to improve loading speed and bandwidth usage. 

It basically wraps other font types such as TTF (TrueType Font) or OTF (OpenType Font).

WOFF2 is new meta because it compresses better than WOFF thanks to Brotli algorithm. (I don't know what this is)


> [!tip] Use WOFF2
> Use only WOFF2 and forget about everything else.


### Unicode range

Unicode range is declared inside the @font-face ruleset.
It serves to different font files (of the same font-family) depending on the language of the content.

Each `unicode-range` is a subset of characters than may have overlapping characters among other unicode ranges. 

Why is this needed? For optimization, of course. We don't need to serve all characters to the user agent. For example, if our page is purely in Vietnamese, why would we need the character 'W'?


### Variable fonts 

Variable fonts are cool as hell, but they are HEAVIER than normal fonts.
So use sparingly.


### Font rendering performance

Finally,... the meat of the matter.

When a web font is not yet loaded, the browser has a decision to make.
- [?] Should it hold off on rendering text until the font arrives?
- [?] Should it render using the fallback font-family until the font arrives?

**By default, different browsers handle this differently.**
Chromium-based and Firefox browsers would delay rendering for 3 secs.
Safari blocks text rendering indefinitely (???)

### Choose a display strategy

Use the `font-display` property when declaring self-hosted font using the @font-face ruleset. The property takes 5 possible values: 

| **Value** | **Block period**  | **Swap period**   |
| --------- | ----------------- | ----------------- |
| auto      | Varies by browser | Varies by browser |
| block     | 2-3 seconds       | Infinite          |
| swap      | 0ms               | Infinite          |
| fallback  | 100ms             | 3 seconds         |
| optional  | 100ms             | None              |

`auto` lets the browser do its default thing. Well, apparently that's not why we are here...

`block` allots a 2-3 seconds window for the font to load (called a block period). In this initial 2-3 seconds, the unloaded fonts are *invisible* to the user. The font is delivery is delayed.

After this period, the fallback is used until the font downloads and swaps in.
In the `block`, since fallback font is not initially displayed, its follow-up swapping isn't considered as jarring as using `swap`.

`swap`, if chosen, allows 0ms block period to mitigate layout shift. The font is *not* delayed but the experience could be jarring when the new font arrives.

`fallback` prefers speed by allowing a shorter block period followed by a short swap period.

`optional` is most time-efficient, disabling the swap period altogether.