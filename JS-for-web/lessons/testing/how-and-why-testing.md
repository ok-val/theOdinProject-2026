## Mock Testing: Why and When?

1. What should you try before testing tightly-coupled code?
   When I have tightly-coupled code, try to decouple it.

2. How to test code that can't be easily decoupled?
   If the code is hard to decouple, try statically mocking it (instead of
   having a whole dynamic setup to test it).

3. What is mocking?
   Faking a function that returns something statically and deterministically.
   Mocking replicates a dynamic setup, essentially by scripting everything.
   This helps with cost because dynamic setup gets expensive.

4. How should you test incoming query messages?
   Test incoming query messages by making assertions about what they
   send back. Simply put, you expect a request that returns a corresponding
   response.

    _The Query:_ You send an incoming request asking for Montreal's weather.
    _The Response:_ The system sends back a JSON payload like {"city": "Montreal", "temp": 22}.
    _The Assertions:_ You write check statements to verify the response:
    - Assert that the HTTP status code equals 200 (success).
    - Assert that the city field in the response is "Montreal".
    - Assert that the temp field is a number.

5. How should you test incoming command messages?
   Test incoming command messages by making assertions about their direct
   public side effects. Simply put, you expect a command to change the states
   of the object that processes it.

    _The Command:_ You send a command to add 'Apple' to a Cart object
    _The Side effect:_ The command alters the state of the Cart object
    _The Assertions:_ Assert that Cart now contains 'Apple'

6. Should test private internal functions?
   No. This is the same as testing implementation. It leaves the test suite
   too rigid and brittle, overspecifying, and adding test refactoring
   overheads.
