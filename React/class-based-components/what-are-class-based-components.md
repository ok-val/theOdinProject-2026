# Class-based components

## This is historical React component patterns

When React was first introduced, functional components were considered
state-less, as they cannot manage states.

Functional components only became state-ful when hooks like `useState`
came around.

So class-based components is old, but nonetheless important since I
might have to deal them some day.

## Building a class component

### The construction of a class-based component

Open [[class-based-comopnent-example.jsx]] in a side window.

```jsx
import { Component } from 'react';

class ClassInput extends Component {
  // 1. Call the constructor function, passing props
  // This is also where you would destructure
  constructor(props) {
    super(props);

    // 2. Declare the state here
    this.state = {
      name: 'Ori',
      inputVal: ''
    };

    // 3. Bind the event handlers here (if they are declared)
    /**
     * Methods declared in a class are not bound automatic bound to
     * the class using function declaration. Thus, binding is needed.
     *
     * Methods declared in class are automatically bound to the class
     * using arrow function. Thus, binding is not needed.
     */
    this.handleInputChange = this.handleInputChange.bind(this);
    // ...

    // 4. Create class methods
    handleInputChange() {
      e.preventDefault();
      this.setState(state => {
        {...state, inputVal: e.target.value}
      });
    };
  }

  // 5. Render the component by declaring the render function
  render() {
    return (
      <section>
        <h3>My name is {this.state.name}</h3>
        ...
        <form>
          <input
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
        </form>
      </section>
    );
  }
}
```
