# Testing Etiquettes

> > > **Test the interface, Not the implementation**

As previously asserted in [[what-to-test-in-a-codebase.md]], this rule
applies throughout React testing as well.

**One of the reasons discussed is the refactoring insight:**
Implementation tests gets too micro and interferes with freedom of
refactoring, thus making the test suits too hard and brittle to change.

**The feedback insight:** Implementation testing can break even when the
program works (false negative) and can pass even when the program
doesn't (false positive).

> > > In React testing, ONLY TEST FOR WHAT THE USERS WILL SEE AND USE.

What the user will see and use and know about is the final product of
the program. Do not test internals. Firstly, implementation testing is
bad for productivity. Second, it takes away resource to actually test is
the program actually works.
