## Overview

HTML stands for *Hypertext Markup Language* and it provides the raw data (from here the DOM tree is created). Essential elements are laid out here. **Think of HTML as the backbone of content structure.**

**CSS stands for Cascading Style Sheet and it adds style to the elements**, positions, colors, changes fonts, and makes this look and responsive.


## HTML -- HyperText Markup Language

HTML defines the core structure and content of the webpage. Use HTML elements to create paragraphs, headings, lists, images, and links. Elements are created using opening and closing tags. Void elements are created with only opening tags. See below:

```html
<!-- How normal elements are created -->
<p>I am a paragraph</p>
<h1> I am header 1</h1>

<!-- How VOID ELEMENTS (how cool) are created -->
<br>
<img source="">
```

Here is MDN's list of predefined tags you can use: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

I should use the correct tags (and not make up my own) to make my site more *indexable* for search engines and more *accessible* for screen readers.

### HTML Boilerplate 

VSCode Emmett shortcut `!, Enter`.
Here are the annotations:

```html
<!DOCTYPE html>
<html lang="en">
%% This is know as the ROOT ELEMENT, the grand daddy of all elements %%
%% `lang` specifies the language of the text, used for accessibility %%

	<head>
	%% Everything in the head is metadata, telling the system where to look for style sheets, charset, and other initial settings %%
	%% The head always follows the root element in first order %%
	%% Anything declared here will NOT show up on the page %%
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	</head>
	
	<body>
	    
	</body>
</html>
```


**Toolkit:** W3C has a [boilerplate checker](https://validator.w3.org/#validate_by_input). How exciting...
