# Sharing state between components

Source: https://react.dev/learn/sharing-state-between-components

## Lifting state up

When I want to change the states of two components simultaneously:

1. Remove their internal states
2. Promote to the closest common parent
3. Pass it down them via props.

Similar to hoisting, this is known as **lifting state up** and it's a
common technique.

The general idea is that:

For unique states, the component should own that state internally. For
shared states, the closest common parent should own that state to be
passed down. This parent provides the single source of truth.

Thus, do not create duplicating or negating states which create higher
chances to them contradicting each other.

## Tracing state change: Bubble up, Cascade down

Here is my personal strategy for tracking state change:

**Trigger stage: Event bubbling up**

1. Consider the simplest input (e.g., a single keystroke)
2. Pinpoint the component that triggers the rerender
3. Track the final destination of the setter function callback
4. Identify the state controlled by that setter function

**Render stage: State vars cascading down**

5. Place the input as the new value for the identified state
6. Trace the final destination(s) where the state cascade down
