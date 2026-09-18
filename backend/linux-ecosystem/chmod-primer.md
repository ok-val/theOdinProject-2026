# What is CHMOD

`chmod` (change mode) is a Unix/Linux cmd used to manage file
permissions, controlling who can read, write, or execute a file or dir.

Basic syntax:

> chmod [OPTION]... MODE[,MODE]... FILE...

`chmod` changes permission for three types of users:

| **User** | **MODE**               |
| -------- | ---------------------- |
| `u`      | User/Owner             |
| `g`      | Group of users/owners  |
| `o`      | Others / everyone else |
| `a`      | `u` + `g` + `o`        |

There are three basic access options:

| **Rights** | **MODE**                                                    |
| ---------- | ----------------------------------------------------------- |
| `r`        | **Read** permission to view file contents                   |
| `w`        | **Write** permission to modify or delete the file           |
| `x`        | **Execute** permission to run the file as program or script |

# Example

- For User/Owner (`u`), add executable rights (`x`):
  > chmod u+x filename.js
