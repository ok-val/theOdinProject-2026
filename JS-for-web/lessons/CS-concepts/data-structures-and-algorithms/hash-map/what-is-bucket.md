## Buckets/Slots

Buckets stores the element. Think of each index in an array to have its
own bucket, but the indexing is handled automatically by that ADT.

For HashMap, the index is **decided by our hashing function**.

Let's say we want to store a specific key-value pair, where:

- Key: Person ID;
- Value: Full name;

And we decide that first name will be used as
_the input for hashing_.

1. Pass `'Fred', 'Smith'` into the hash function to get a code;
   How this hash function hashes its value is up to you;
2. The hash function returns a hash code of say `385`;
3. `385` is now the index, which gives us a bucket;
4. Store Fred's ID and full name in that `385` bucket.

To ensure that each bucket is unique enough, it would be helpful to
consider a few hashing input that would give us enough information.

### How to get value of from bucket?

1. Hash the key (based on our previous decision)
2. Get the index
3. If the bucket is not empty, then visit the bucket. Else return `null`.
4. Compare the bucket's key with the same key for retrieval
5. If true, return bucket's value, else return `null`.

Step 4 is essential assurance for when the same key input returns the
same hash code.
