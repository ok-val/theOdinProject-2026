thisArg is slightly more advanced, but it can become handy because it allows us to fully **store in objects functions and conditions to run those functions.**

Note that *most* (with the exception of `sort`) functions that do callbacks like `find`, `filter`, or `map` accept an optional additional parameter `thisArg`. This simply tells the function where to look for the arguments if it was not explicitly declared in the callback. 

**This is helpful because we can conveniently a function and its corresponding conditions WHEN it is declared INSIDE an object.**

Define an object like such:

```js
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  } // this. works as self-referencing
};
```

And supposed we have an array of objects as such:

```js
let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
```

We can find users, rather cleanly, using `this` as a stand-in for `func`.

```js
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

