# Component Lifecycle Methods of Class-Based Components

In functional components, Effect (via the `useEffect` hook) allows me to
perform tasks the end of every rendering.

However, class-based components (or class components) work a little
different. I have to use specific lifecycle methods instead of effect.

There are three stages of a component's lifecycle:

1. Mounting
2. Updating
3. Unmounting

> > > Each of these stages has a **lifecycle method** assigned to them
> > > within class components.

## render()

`render()` is a lifecycle method that **runs on mount and update** of a
component.

**It is the only one required in a class component.**

Every render should be pure, meaning it does not modify the component
state, returning the same thing each time it's called, and doesn't
directly interact with the browser.

## componentDidMount()

`componentDidMount()` is a lifecycle method that **runs after mount**.

This method is used to fetch data that is needed for the component here.

## componentDidUpdate()

`componentDidUpdate()` is a lifecycle method that **runs after**
**re-render**.

Avoid the issue of haphazardly changing state here as it may cause
infinite loop by introducing conditional statements about the equality
of previous and current props to break out of the loop.

## componentWillUnmount()

`componentWillUnmount()` is a lifecycle method that **runs before**
**unmount** and nullify.

This is the clean up function and should be used to negate/invalidate
stale requests that run in the WebAPI when they return by using an
`ignore` flag. See more in [[you-might-not-need-an-effect.md]].

## Example of lifecycle methods working together

```jsx
class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  // ...
}
```

## Lifecycle methods and useEffect equivalence

Essentially, each different use cases of `useEffect` is a combination of
one or more of these lifecycle methods. Here's how they map:

| **useEffect() config**     | **Class lifecycle combo**                        |
| -------------------------- | ------------------------------------------------ |
| Empty dependency array     | `componentDidMount()`                            |
| Dependency array w/ values | `componentDidMount()` and `componentDidUpdate()` |
| No dependency array        | `componentDidMount()` and `componentDidUpdate()` |
| Return function            | `componentWillUnmount()`                         |

See this table for a killer visualization of lifecycle methods:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Reference how these methods are implemented here:
https://react.dev/reference/react/Component
