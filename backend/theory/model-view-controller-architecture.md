# Model-View-Controller (MVC) architecture

Source:

- https://developer.mozilla.org/en-US/docs/Glossary/MVC

> MVC is a a foundation software architectural pattern that divides an
> app into three interconnected components to separate internal business
> logic and display.

This _seperation of concern_ provides for a better division of labor,
improved performance and cleaner server-side folder structure.

**In simple terms, we want to decouple the data and the control hub.**

Some other design patterns based on MVC are MVVM (Model-View-Viewmodel),
MVP (Model-View-Presenter), and MVW (Model-View-Whatever).

In this pattern, the parts have the following functions:

1. **Model:** manages data and business logic
2. **View:** handles layout and display
3. **Controller:** routes commands to the model and view parts

![image of the MVC flowchart](./img/image.png)

## Handling user changes

View sends user input to Controller.

**If** data is changed, Controller invokes Model to update data; Model
sends the updates back to View.

**Else**, Controller updates View directly if data is not involved.

## Implementation

See './routes', './controller/', and 'use-MVC-pattern.js'
