Here are a few considerations to decide when to use either `map` for `forEach`:

| Method       | Purpose / Intent    | Characteristics                                                                                                                                                         |
| ------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.map()`     | Pure transformation | - No mutation  <br>- No side effects  <br>- Returns a **new array**  <br>- Predictable, testable, composable                                                            |
| `.forEach()` | Side effects        | - Logging  <br>- DOM manipulation  <br>- Mutating external state  <br>- Updating counters  <br>- Writing to a database  <br>- Anything that is **not** a transformation |

