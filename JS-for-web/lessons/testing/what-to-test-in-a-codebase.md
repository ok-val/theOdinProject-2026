Source: https://www.youtube.com/watch?v=URSWYvyc42M

## The Magic Tricks of Testing

### The core question: How well is a codebase tested in percentage?

100% is awesome, but a lower number is surely expected!
Many people don't test their code... because tests can be slow, it's not
fun, and new features just break the tests.

So it is rational to believe that tests can be expensive.
The promise of productivity of testing doesn't return.

THE GOOD NEWS!!!! It doesn't have to be this way.

Let's identify the cause:

- Did you write too many tests?
- Did you know the goal for the tests that you wrote?

There are two camps of tests:

1. Unit test: Does each isolated component behave as expected?
2. Integration test: Do all components work together as expected?

And so the goals for these tests,
Are they?

- Thorough?
- Stable?
- Fast?
- FEW?

Answering these requires a clarity about your vision of the app

### A framework: Focus on the MESSAGE

Messages come from three origins:

1. Incoming from outside
2. Sent to self inside
3. Outgoing to outside

Each of these message come in two types:

1. Query: RETURN something, change nothing
2. Commands: Return nothing, CHANGE something

**The ISSUE:** We often conflate commands and query (i.e., DOM manipulation,
and fetching data in the same function, or using pop() and push() which
alter the state of some external objects---and this is why FP is preferred).

> [!solution] To start to identify what tests we need to conduct:
>
> 1. Where is this message coming from?
> 2. Which type of message is it? Query or Command?
> 3. Is this test redundant and thereby overspecifying?
>    Table 1 shows a decision framework
> 4. Are you testing the Interface or the Implementation?
>    Implementation tests gets too micro and interferes with freedom of
>    refactoring, thus making the test suits too hard and brittle to
>    change. Simply put, test I/O, don't test the internals.

**Table 1.** What should you test based on message origin and function?

| Origin ↓ / Message → | Query                | Command                   |
| -------------------- | -------------------- | ------------------------- |
| Incoming             | Assert output        | Assert SE / command chain |
| ---                  | ---                  | ---                       |
| Internal             | * but minimize SE    | * but minimize SE         |
| ---                  | ---                  | ---                       |
| Outgoing             | * Tested by receiver | Expect to send            |

Legend:
^[(*) Do not test, but break rule only if it saves you money.]

- Assert response: Response must be this.
- Assert SE: Side effect must be this.
- Expect to send: Must send something.
