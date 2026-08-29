# Mocking child components to make unit tests more concise

Source:
https://medium.com/@taylormclean15/jest-testing-mocking-child-components-to-make-your-unit-tests-more-concise-18691ef6a0c2

## The problem

In React testing, it's common that components higher up the tree becomes
more difficult to test because of the many child components making up
complex connections.

So you have a already tested your child components and don't want to
retest their functionality. And now you just want to test the logic of
the parent component (without testing the full integration). What to do?

Isolate the parent component by creating mocks for the child components.
This is what the TOP does with their unit test on this component:

https://github.com/TheOdinProject/theodinproject/blob/0886578d5b27a967e6bba2b31f212efe284d9413/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx
