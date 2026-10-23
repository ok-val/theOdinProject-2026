# How not to store password

From the worst to less worse:

1. **Store raw password in a DB**

2. **Encrypt your password then store it:** The password can be
   decrypted using patterns from repeated passwords. There are some type
   of patterns.

3. **Hash your password without salting:** Repeated passwords could also
   show patterns albeit it would take a lot more computational power and
   also by using a Rainbow Table.

**Current best practice:** Hash and salt
