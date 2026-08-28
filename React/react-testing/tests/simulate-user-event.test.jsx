import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('App comonent', () => {
  it('renders magnificent monkeys consistently', () => {
    // toMatchSnapShot() expects an object container instead of screen
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhinos after button click', async () => {
    // this suite function sets up a user event
    const user = userEvent.setup();

    // set up App again for cleaning up after each
    render(<App />);

    // query the button
    const button = screen.getByRole('button', { name: 'Click Me' });

    // return a promise for user click
    await user.click(button);

    // finally run the test function
    expect(screen.getByRole('heading').textContent).toMatch(
      /radical rhinos/i
    );
  });
});

describe();
