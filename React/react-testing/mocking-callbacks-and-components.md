# Mocking in React Testing

A great overview: https://academind.com/articles/testing-react-apps

## Testing callback handlers

Testing callback handlers is all about testing whether a callback has
been called and called successfully.

In tandem with the functional testing in
[[./src/simulate-user-event.test.jsx]], I could also put a event tracker
on any component.

Here's the template:

```jsx
// CustomButton.test.jsx

import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  // always set up a baseline
  it("should render a button with the text 'Click me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
  });

  // the positive and negative test case
  it('should call the onClick function when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'Click me' });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
```

Another user event testing for input field:

```jsx
test('input value is updated correctly', async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole('textbox');
  await user.type(input, 'React');

  expect(input.value).toBe('React');
});
```

TOP recommends that the `userEvent.setup()` is best set up per test
right before `render()` and not outside the test suite (i.e., in a
`beforeEach` block).
