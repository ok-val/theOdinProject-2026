## What are they?

**Outer display type** controls how the element participates in the parent's layout.

**Inner display type** controls how the element lays out its children.

|What it controls|Examples|Meaning|
|---|---|---|
|**Outer display**|`block`, `inline`, `inline-block`, `list-item`|How the element behaves _as a box inside its parent_|
|**Inner display**|`flex`, `grid`, `flow`, `ruby`|How the element arranges _its children_|

➜ This means that an element always possesses two display types: one that controls outer behaviors and one for inner behaviors.


## Default display types

Elements come with default display values. Here are few:

| Element  | Default display | Notes                                       |
| -------- | --------------- | ------------------------------------------- |
| `div`    | `block`         | Starts on a new line, fills available width |
| `span`   | `inline`        | Flows with text, no width/height control    |
| `p`      | `block`         | Paragraphs create vertical separation       |
| `li`     | `list-item`     | Includes a marker (bullet/number)           |
| `button` | `inline-block`  | Inline placement but can size like a block  |

