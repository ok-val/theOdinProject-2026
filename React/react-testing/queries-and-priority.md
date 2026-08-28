# Queries

Source: https://testing-library.com/docs/queries/about/

> Queries and methods that Testing Library (a project for building test-
> driven development tools) gives to find elements on a page.

The difference between them is whether they return a matching node or
error if not found or whether they return a Promise and retry.

There are different types of queries. There are more accessible ways to
queries than others.

Queries can be chained with `user-event` to test interactions.

## Types of Queries

| Query type            | No match    | 1 match        | >1 matches   | Retry (async) |
| :-------------------- | :---------- | :------------- | :----------- | :------------ |
| **Single Element**    |             |                |              |               |
| `getBy...`            | throw error | return element | throw error  | No            |
| `queryBy...`          | return null | return element | throw error  | No            |
| `findBy...`           | throw error | return element | throw error  | Yes           |
| **Multiple Elements** |             |                |              |               |
| `getAllBy...`         | throw error | return array   | return array | No            |
| `queryAllBy...`       | return []   | return array   | return array | No            |
| `findAllBy...`        | throw error | return array   | return array | Yes           |

## `screen` Object

The `screen` object is an object of the RTL that contains all the
queries pre-bound to `document.body`. Kind of like a stand-in for the
actual DOM's `document.body`.

## Priority for accessibility

Ideally, testing should emulate as close as possible how users would
interact with the page. Theoretically, the common DOM API
`querySelector` can be used to query by class or id. But this is not
preferred b/c classes and ids are invisible to the users.

Because test should resemble how users interact with the components,
Testing Library recommends using these following queries:

1. **Queries accessible to everyone**: Queries that reflect the
   experience of visual/mouse users as well as assistive tech:
   1. `getByRole`: Argubly the most accessible query to query elements
      by type. When combined with the `name` option, it can further
      filter:
      > getByRole('button', {name: /submit/i})
   2. `getByLabel`: Preferrable for form fields because user navigate
      forms using label text.
   3. `getByPplaceholderText`: Alternative for `getByLabel` if the form
      field does not have a label.
   4. `getByText`: Query element by text content b/c text is the main
      way users find elements. Use this one for non-interative elements.
   5. `getByDisplayValue`: Query element by the filled-in value of an
      interactive component.

2. **Semantic queries:** HTML5 and ARIA compliant selectors. Note that
   these compliance standards vary throughout different user bases.
   1. `getByAltText`: Query element by alt text (works on any custom
      elements)
   2. `getByTitle`: Note that the title attribute is consistently read
      by screenreaders, and is not visible by default for sighted users.

3. **Test ID**:
   1. `getByTestId`: The user cannot see or hear these. Recommended only
      for elements with dynamic role/label.
