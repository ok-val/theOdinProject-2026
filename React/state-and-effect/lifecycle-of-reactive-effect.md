# Lifecycle of Reactive Effects

Source: https://react.dev/learn/lifecycle-of-reactive-effects

Recalling from [[how-to-deal-with-side-effects.md]] that I should be
using effect very selectively, preferrably to deal with server data,
API, or DOM sync.

This is partially because the lifecycle and role of effects are
different from components. Thus, effects should not be in direct charge
of components or their functionalities.

Components may mount, update, or unmount (rendered, rerendered, and
removed). But effects can only do two things:

1. Start sync (body code)
2. Stop sync (return code)

## Effects do not behave like components

A component may mount, update, and unmount.

But this is not the way to think about Effects.

Here's how to think about Effects:

> > > An Effect describes how to sync an EXTERNAL SYSTEM to the current
> > > props and update.

An emphasis on external system aims to show that component-level
thinking do not deal with external systems.

> [!note] Analogy for Effect
>
> An effect is like an add-on for your component. It provides the
> component with a subscription to something else outside of the entire
> system itself.

## Effects do not behave like events

Event handlers run once per interaction, Effects run whenver
synchronization is needed.

## The sequence of execution

**Initial render**:

1. Start sync (body code)

**Rerender on dependency change**

2. Stop sync (return code)
3. Start sync (body code)

> [!note] Effect syntax
>
> The syntax for effect looks like a regular callback function, but in
> fact, it's more like a conditional function where certain codes run
> based on certain dependency change.

## When to separate effects?

**Separate effects by logic!**

Each effect in the code should represent a separate and independent
logic

## React verifies every internal reactive value

And throws a linting error if said dependencies are not declared.

If I include a state variable inside an Effect, I must declare it as a
dependency.

If the vars included are not reactive, either move them outside of the
functional component OR inside the Effect (inside the functional
component) as a const.

## Can I choose dependencies?

Yes, if the dependencies aren't used internally. In this case, the
dependencies I'd select would be arbitrary.

No, if the dependencies ARE used internally. In this case, you must
either include them or prove to React that the dependencies are not
reactive.

## Never ignore or suppress a linting error

Even if it's benign. It's always worth fixing!
