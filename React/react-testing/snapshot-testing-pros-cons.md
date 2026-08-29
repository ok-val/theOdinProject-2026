# Pros and Cons of Snapshot Testing

## Pros

1. **Fast baseline testing**

Want to make sure your baseline is consistent on every initial render?
That your UI contains a button, an h1, and a p every time it starts?

Snapshot lets me check if one initial output matches another, achieving
consistency for the baseline.

I consider this baseline testing because the unit shall change over its
lifecycle. But this test ensures that it always starts the same way.

## Cons

1. **Testing specific values gives False Negative**: Alternatively, test
   if the element actually store something using `expect.any()` or other
   _asymmetric matchers_.

2. **Baseline testing does not tell you if the program works or not**:
   It's all about the current content matches some referenced content.

3. **Larger snapshots are harder to read and store**: Can try `shallow`
   instead of full `render` or break down the component into smaller
   pieces.

## Good practice for snapshot testing

- Don't name your test suite "Render correctly". Be more specific:
  "Render with part A and B".

- Always pair snapshot tests with functional tests.

- Focus on what the user would see and use. Only test internals if the
  component under testing is a dynamic component. The constant needs to
  be generic enough to make the test not too brittle but specific enough
  to make the test meaningful.
