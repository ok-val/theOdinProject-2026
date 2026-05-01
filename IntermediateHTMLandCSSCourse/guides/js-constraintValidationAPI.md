---
doc-type: wiki-page
sources: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation,
---
I want to change the text of a the native error message. How to do? 
I'll need JS and the Constraint Validation API.

## Constraint validation API

The Constraint Validation API contains a set of methods and properties for the following DOM elements:

|**DOM Interface**|**Represents the Element**|
|---|---|
|`HTMLButtonElement`|`<button>`|
|`HTMLFieldSetElement`|`<fieldset>`|
|`HTMLInputElement`|`<input>`|
|`HTMLOutputElement`|`<output>`|
|`HTMLSelectElement`|`<select>`|
|`HTMLTextAreaElement`|`<textarea>`|

As seen, it supports some of the elements, but not all.

For the elements it supports, this API makes the following **properties** available:
* `validationMessage`: returns the error message for validation constraints
* `validity`: returns `ValidityState` object that contains several sub-properties describing the validity state of the element. The properties below accept a bool that, if true, determines if the element belongs to the `:invalid` or `:out-of-range` pseudo-class.
	* `patternMismatch` (bool): compares with the `pattern` attribute.
	* `tooShort`/ `tooLong` (bool): compares with `maxlength` or `minlength` attribute
	* `rangeOverflow` / `rangeUnderflow` (bool): compares with `min`/`max` attribute
	* `typeMismatch` (bool): compares with `type` attribute
	* `valid` (bool): compares with all constraints. Determines if `:valid` or `:invalid`
	* `valueMissing` (bool): compare if required attribute is toggled with input presence
* `willValidate` (bool): see if the element is supported by the API and therefore whether it can be sent for validation. 

The API provides some handy **methods**:
* `checkValidity()`: returns true if valid, false if otherwise.
* `reportValidity()`: reports invalid fields using events. To be combined with `preventDefault()` in an `onSubmit` event handler.
* `setCustomValidity()`: accepts a string that represents the error message. If `element:invalid`, the custom message is displayed.

~={black}To see how these are implemented in action, go see the exercises folder.=~

