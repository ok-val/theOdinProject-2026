## Rules of JSX

1. **JSX component always returns ONE element:**
   If multiple components should return, wrap them in this ONE element.
   The one element could be a `<>React fragment</>` or `<div>`.

2. **All tags must be closed:**
   In native HTML, _void tags_ don't need to be closed (e.g. `<input>`)
   However, in JSX they must all be closed (e.g., `<input />`)

3. **Use DOM component props:**
   Because JSX compiles everything down to JS, element attributes here
   will need to be JS-idiomatic object props instead of native HTML:
   - _camelCase_ instead of _kebab-cased_;
   - use JS idomatic attribute names: class -> className
   - Two exceptions: `aria-*` and `data-*`

For the complete list of **DOM component props**, see:
https://react.dev/reference/react-dom/components/common

## Auto converter

For your time and convenience:
https://transform.tools/html-to-jsx

## HTML to JSX conversion

```jsx
<h1>Test title</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
</svg>
<form>
  <input type="text">
</form>
```

Applying the three rules:

1. **Return only one component:**

```jsx
<>
	<h1>Test title</h1>
	<svg>
		<circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
	</svg>
	<form>
		<input type="text">
	</form>
</>
```

2. **All tags must be closed:**

```jsx
<>
  <h1>Test title</h1>
  <svg>
    <circle cx='25' cy='75' r='20' stroke='green' stroke-width='2' />
  </svg>
  <form>
    <input type='text' />
  </form>
</>
```

3. **JS-ualize element attributes:**
   use camelCase, use DOM component properties

```jsx
<>
  <h1>Test title</h1>
  <svg>
    <circle cx='25' cy='75' r='20' stroke='green' strokeWidth='2' />
  </svg>
  <form>
    <input type='text' />
  </form>
</>
```
