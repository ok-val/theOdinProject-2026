CSS frameworks and preprocessors (or precompilers) are tools that can make writing CSS more streamlined.

It's useful to know about them because it's used in many workplace. 

Starting as a beginner, it's considered counter-productive. 
~={green}It's best to develop a strong foundation before starting to use shortcuts. =~
Having a strong foundation will ease using framework and preprocessor in the future.

## Frameworks overview

There are many frameworks.
Each has different goals. 


> [!definition] CSS framework
> A CSS framework is **a bundle of CSS code that you can use and access**. They would provide a handful of pre-packaged code for convenience and rapid development.
> 
> ~={green}CSS framework is developing faster and more easily.=~


| **Framework**                              | **Primary Use Case**                                                                                                                           | **Key Characteristic**                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **[Bootstrap](https://getbootstrap.com/)** | **Rapid Development:** Ideal for quickly building responsive, "standard" looking websites with pre-built components like navbars and modals.   | "Batteries-included" with a heavy set of pre-designed UI elements and JavaScript interactions.                                  |
| **[Tailwind](https://tailwindcss.com/)**   | **Custom Design:** Best for developers who want full control over the look without leaving their HTML, using a "utility-first" approach.       | Uses single-purpose classes (e.g., `flex`, `pt-4`) to build unique designs from scratch.                                        |
| **[Bulma](https://bulma.io/)**             | **Modern Flexbox Layouts:** Great for developers who want a lightweight, CSS-only framework that is easy to learn and purely based on Flexbox. | No JavaScript included; it focuses entirely on modular CSS classes that are easy to read.                                       |
| **[Foundation](https://get.foundation/)**  | **Professional/Enterprise Sites:** Used for highly semantic, complex, and professional-grade responsive sites that require fine-tuned control. | Highly customizable and sophisticated, often cited as being more "flexible" but having a steeper learning curve than Bootstrap. |


## Disadvantages of frameworks

Having the framework table above, frameworks are great to rapid development or prototyping. They are meant to help professionals get started more quickly, getting them to a point of core content development rather than building up nav bars every time.

Because of this, too many devs jump into learning frameworks too early in their education. This creates something called technical debt. ~={black}Imagine going through K-12 without truly understanding prime number... That's an institutional sin IMO. =~

When using CSS frameworks, it is imperative to understand what a framework is doing "under the hood" so that I know how to maintain and manipulate these mechanics later. ~={black}(Good! This is what I sign up for).=~


## Preprocessors overview

> [!definition] Preprocessors (aka precompilers)
> Preprocessors are otherwise known as precompilers. They are languages that help me write CSS more easily. They are particularly helpful for:
> 
> - **Reducing Repetition:** Using loops and conditionals to generate repetitive styles.
> - **Organization:** Joining multiple stylesheets into one final CSS file.
> - **Nesting:** Writing CSS selectors inside one another to match your HTML structure (though vanilla CSS now supports this as well).
> 
> ~={green}CSS precompilers are for compiling CSS files more easily.=~


| **Preprocessor**                       | **Primary Use Case**                                                                                                                                   | **Key Characteristic**                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **[SASS](https://sass-lang.com/)**     | **Industry Standard:** Best for large-scale professional projects where a robust ecosystem and advanced features (like mixins and logic) are required. | The most popular preprocessor; offers two syntaxes (SCSS is the most common as it is a superset of CSS).                   |
| **[LESS](https://lesscss.org/)**       | **JavaScript Integration:** Often used in projects that want to leverage JavaScript-based styling logic or older legacy systems like Bootstrap 3.      | Written in JavaScript, making it very easy to set up in Node.js environments without extra compilers.                      |
| **[Stylus](https://stylus-lang.com/)** | **Minimalist Coding:** Ideal for developers who want a shorthand, "Python-like" experience with optional colons, semicolons, and brackets.             | Extremely flexible and "unopinionated"—you can write code that looks like standard CSS or code that is very stripped down. |

Keep in mind that many of their original advantages are now built into vanilla CSS.

