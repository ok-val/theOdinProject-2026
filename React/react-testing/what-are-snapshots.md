# Snapshot testing

Snapshot testing is about comparing a rendered comopnent with an
associated snapshot file to ensure the UI does not change unexpectedly.

A typical snapshot test case renders a UI component, takes a snapshot,
then compares it to a referenced snapshot file stored.

> Pass if the two snapshots matches, fails if the two snapshots do not.

## What is a snapshot technically?

A snapshot is an HTML representation of render. It ensures that nothing
unexpected creeps into the code.

Snapshot is only about consistency, meaning that if the underlying code
has a bug, we have a consistent bug. They don't tell whether if the code
works or not. They only provide a baseline.

> Snapshot only offers insurance of a consistent BASELINE. It should be
> used to (1) detect intentional changes and (2) make refactoring safer.
