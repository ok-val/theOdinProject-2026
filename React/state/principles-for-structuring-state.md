# Principles for structuring state

Source: https://react.dev/learn/choosing-the-state-structure

When writing a component that holds some state, I'll have to make some
choices about **how many state variables to use and what their DS**.

Here are some principles for this consideration:

1. **Group related state:** If two states always update together, merge
   them into a single state (an object with multiple props).

   ```jsx
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);

   // should be grouped as
   const [position, setPosition] = useState({ x: 0, y: 0 });

   // when updating this state variables, copy and edit
   setPosition({ ...position, x: 100 });
   ```

2. **Avoid contradictions in state:** When the state is structured in a
   way that sever pieces of state my contradict, avoid this.

3. **Avoid redundant state:** If you can calculate some information from
   the component's props or existing states, you should not put that
   info into that component's state.

   ```jsx
   export default function TravelPlan() {
     const [items, setItems] = useState(initialItems);
     const [total, setTotal] = useState(3);
     const [packed, setPacked] = useState(1);
   }
   ```

   Keeping these states vars in sync with each other might just cause
   some annoying bugs when you forget to update one of them...

   > > > Use as few states as possible < < <

4. **Avoid duplication in state:** When the same data is duplicated
   between multiple state variables, it's difficult to keep them in
   sync. Reduce duplication when you can.

   ```jsx
   export default function MailClient() {
     const [letters, setLetters] = useState(initialLetters);
     const [highlightedLetter, setHighlightedLetter] = useState(null);
   }
   ```

   Notice that states contain duplicated item `letter`. Duplicated
   states conflict with each other and cause stale states.

5. **Avoid deeply nested state:** Deeply nested state is not convenient
   to update. Prefer to flatten state data structure, using a technique
   that's called normalization.
