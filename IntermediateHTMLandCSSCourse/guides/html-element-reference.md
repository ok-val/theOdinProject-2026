---
doc-type: wiki-page
sources: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
---
## Elements

See the [MDN link](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) for the complete list of elements.
The following entries are function groups of elements.

### Main root

`<html>` is the only one here. This is the **root element**. Everything else is its child.

### Metadata

Metadata contains information about the page (style, scripts, software specs, render-related instructions).

`<link>` is known to link **external CSS** files but also can be used to establish site icons (see Flavicon). 

`<style>` is used here for **internal CSS**. 

### Content sectioning

Content sectioning elements allow *organizing the document content* into meaningful, logical pieces. It includes higher-level markups like `<main>`, `<header>`, and `<nav>`.

### Text content

Text content elements are for organizing text blocks. 

**A few interesting ones:** 
* `<blockquote>` is for extended quotations, rendered with indentation; it uses the `cite` attribute for URLs.
* `<dl>` is for description lists, containing groups of `<dt>` titles and `<dd>` descriptions as key-value pairs.
* There is an alternative for `<ul>` which is `<menu>`. 
  ~={green}My first impression:=~ this is for listing controls that should not be use `<ul>`. 

### Inline text semantic

Inline text semantic elements is for defining the meaning, structure, or style of a word, line, or any arbitrary piece of text.

**Some interesting ones:**
* `<abbr>` is for abbreviations
* `<b>` makes texts bold like `<strong>` but does not grant special importance. Screen readers will not emphasis it. It's purely for visual important.
* `<em>` can be nested to indicate *greater emphasis* (?!)
* `<ruby>` is for adding Latin annotations to imagerial alphabets 
* `<samp>` is for adding sample output from a computer program
* `<wbr>` is for WORD-BREAK OPPORTUNITY for long words. It's cousin `&shy;` adds hyphenations.

### Image and multimedia

These elements are for images, audio, and video.

* `<area>` is a fascinating for creating a clickable area; I can use this with `<map>` to define an image map
* `<track>` lets me specify timed text tracks (or time-based data). This allows for handling subtitles for examples... Cool!

### Embedded content

These elements are used to embed other documents.

* `<embed>` is the famous one here, I suppose.
* `<iframe>` and `<fencedframe>` functions the same, but the latter has some more privacy features built in.
* `<object>` is for any pieces of media, handled internally or even via plugin.
* `<picture>` offers various sources for a single `<img>` for alternative versions of an image for different display/device needs.

### SVG and MathML

These are its own functional category? `<svg>` and `<math>`.


### Scripting

Scripting elements are for running scripts internally (within the same HTML doc). 

* `<canvas>` allows you draw and animate via the canvas scripting API.
* `<noscript>` allows an insertion of some HTML if scripting is turned off or unsupported.
* And then I know `<script>`

### Demarcating edits

These elements indicates <del>specify</del> <ins>specific</ins> parts of the text that have been altered.
(Also, now I know how to create underlined and line-through texts in MD.)
Fantastic!

### Table content

Table content elements are used for working with table content (DUH!).
Well, handling tabular data to be precise.

* For tables with larger data, use `<tbody>`, `<tfoot>`, and `<thead>`. 
* I can use `<colgroup>` to group columns. 
  Also it seems like HTML likes to enumerate tabular data by row. 

```html
<tbody>
    <tr> <!-- this is one row -->
      <th scope="row">TR-7</th>
      <td>7</td>
      <td>4,569</td>
    </tr>
</tbody>
```


### Forms

Form element provides different modes for user input.

* `<input>` and `<button>` are among the famous ones

### Interactive elements

These offer a selection of elements that help to create interactive user interface objects.

* `<details>` is used with the child `<summary>` to expand/collapse nested information. Toggle state to fold or unfold content.
* `<dialog>` is another interesting to create popups.



