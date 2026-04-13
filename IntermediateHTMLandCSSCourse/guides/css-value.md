---
doc-type: wiki-page
sources: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units
---

> [!definition] CSS value
> **CSS values define what types of value are valid for each CSS property.**
> I can spec keywords for values of `color` or `border-color`, but not for lengths.
> Value types are surrounded by `<>` such as `<color>` or `<length>`

Some properties have the same name with its data type (e.g., `color` property takes `<color>` data type). 

**Each data type can take multiple allowed values.** 
The property `color` takes more than color names but also `rbg()` color function. 
Think of data type as a machine that takes single or multiple parameters.

## Lengths

The most common numeric type is `<length>`. 
It is a combination of `<number>` and `<unit>`. 

**Absolute units** are independent parameters.

| Unit | Name                | Equivalent to            |
| ---- | ------------------- | ------------------------ |
| `cm` | Centimeters         | 1cm = 37.8px = 25.2/64in |
| `mm` | Millimeters         | 1mm = 1/10th of 1cm      |
| `Q`  | Quarter-millimeters | 1Q = 1/40th of 1cm       |
| `in` | Inches              | 1in = 2.54cm = 96px      |
| `pc` | Picas               | 1pc = 1/6th of 1in       |
| `pt` | Points              | 1pt = 1/72nd of 1in      |
| `px` | Pixels              | 1px = 1/96th of 1in      |

**Relative units** are relative parameters.

| Unit  | Name | Equivalent to                                                         |
| ----- | ---- | --------------------------------------------------------------------- |
| `em`  | em   | 100% font-size of the element (or its parent if for nested font-size) |
| `rem` | rem  | 100% font-size of the root element (:root or html)                    |

Nested font-sizes using em are **compounded**. 


## Color 

Color take a few acceptable data type.

First is `<name-color>` or **color keywords**. 
These are a collection of finite color values that are assigned English names. 
It's accessible and easier to verbally communicate. 