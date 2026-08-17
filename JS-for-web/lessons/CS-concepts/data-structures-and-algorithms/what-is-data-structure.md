# Data Structure

## What is a data structure?

A data structure is a way to organize and store data that is usually
chosen for efficient access to data.

More precisely, a DS is the physical implementation of a data type,
specifying how its organized and stored in memory, as well as functions/
operations for working with this data.

## Usage

Efficient DSs are essential for managing large datasets and determines
the design of algorithms.

Relational DBs use a different DS than compilers for different
operations. Filesystems and search engines make extensive use of
specialized DSs as well. DSs are used to organize data in both primary
memory (RAM) and secondary storage (such as disks).

## Implementation

To implement a DS is to implement a set of subroutines.
These subroutines are operations such as insertion, deletion, traversal,
or lookup, that create and manipulate instances of that structure.

DS (as opposed to ADT -- Abstract Data Types) gets specific and concrete
about the implementations of these subroutines.

DS generally relies on memory addresses, (aka pointers or references
(in bit string)) that can be stored in memory.

For example, arrays and records store elements in adjacent memory
locations, rigid layout but fast indexing. Linked data (such as linked
lists and trees) store addresses of elements in relation to one another,
flexible layout and dynamic resizing but no indexing.

Different structures are suitable for different tasks.

## DS is built on DT

Data structures are generally built upon primitive data types
(int, float, bool).

- An **array** (DS) is set of elements in a specific order, typically
  all of the same type (DT).
- A **linked list** is a linear collection data elements of any type.
  Each access point / level is called a node. Each node as a value and
  points to the next node. Since a linked list does not have indexing,
  random access (direct access) is slower on lists and on arrays.
- A **record** (aka tuple or struct) is an aggregate DS, a value that
  contains other values, indexed by names. Record's element are called
  fields or members.
- **Hash tables** (aka hash maps) are DS that provide fast retrieval of
  vals based on keys. They map keys to indexes in array. Hash table is
  often used in dictionaries, caches, and DB indexing.
  **Graphs** are collections of nodes connected by edges, representing
  relationships between entities. Graphs can be used to model social
  networks, computer networks, transportation networks. They consist of
  vertices (nodes) and edges (connections between nodes). Connections
  may have vectors (directions), may cycle or be acyclic. Traversing a
  graph uses algos such as breadth-first or depth first search.
- **Stacks & Queues** are more abstract DT that can be implemented as
  arrays or linked lists. A stack has two main operations: push and pop,
  working at the topmost element from the stack. A queue has two main
  operations: enqueue and dequeue (implemented as shift and pop).
- **Tree** represents hierarchical organization of elements, involving
  nodes, edges (branches), and root.
- **Trie** (aka prefix tree) is a special type of tree to efficiently
  retrieve strings. Each node represents a character of a string, and
  the edges represents the chars that connect them. Particularly useful
  for autocomplete, spell-checking.

## Choosing a DS

In a structural, I have hierarchies, useful to chart information into
tiers instead of one long array of things.

1. **KNOW YOUR GOAL**
   of your application among other basic requirements for your app.

2. **UNDERSTAND THE TRADE-OFFS**
   between the performance of different structures in doing operations
   such as access, search, insert, delete, space etc.
