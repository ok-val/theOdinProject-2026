import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Main App component', () => {
  it('render correct heading', () => {
    // render() returns a component to be appended to the vdom document.body
    render(<App />);

    expect(screen.getByRole('heading').textContent).toMatch(
      // use the i regex flag for case-insensitive comparison
      /Testing render function/i
    );
  });
});

/**
 * In which:
 *
 * - `describe` is a test suite
 * - `it` is a test factory
 * - `render` is a test function for DOM insertion
 * - `expect...toMatch` is a test function matching / assertion
 * - `getByRole` is a query method of the virtual DOM's screen
 */
