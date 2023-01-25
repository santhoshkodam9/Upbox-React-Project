import { render, screen, cleanup } from '@testing-library/react';
import { Footer } from './Footer';

afterEach(() => {
  cleanup();
});

test('to test footer component', () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
