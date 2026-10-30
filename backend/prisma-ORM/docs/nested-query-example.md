# Nested Query Example

```js
// IMO, this is hard to read... I'd rather a clean transaction with synchronous queries
const u = await prisma.user.create({
  include: {
    posts: {
      include: {
        categories: true
      }
    }
  },
  data: {
    email: 'emma@prisma.io',
    posts: {
      create: [
        {
          title: 'My first post',
          categories: {
            connectOrCreate: [
              {
                create: { name: 'Introductions' },
                where: {
                  name: 'Introductions'
                }
              },
              {
                create: { name: 'Social' },
                where: {
                  name: 'Social'
                }
              }
            ]
          }
        },
        {
          title: 'How to make cookies',
          categories: {
            connectOrCreate: [
              {
                create: { name: 'Social' },
                where: {
                  name: 'Social'
                }
              },
              {
                create: { name: 'Cooking' },
                where: {
                  name: 'Cooking'
                }
              }
            ]
          }
        }
      ]
    }
  }
});
```
