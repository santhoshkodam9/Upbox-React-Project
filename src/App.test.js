import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('to test background image is loaded', () => {
  render(<App />);
  const bgimage = screen.getByTestId("bg-image");
  expect(bgimage).toBeInTheDocument();
});

test('to test Top Menu component is loaded with any li element', () => {
  render(<App />);
  const topmenu = screen.getAllByText(/login/i);
  expect(topmenu[0]).toBeInTheDocument();
  expect(topmenu[0]).toHaveTextContent("LOGIN >");
});

test('to test Footer component is loaded with alt text of any social media link', () => {
  render(<App />);
  const footer = screen.getAllByAltText('instalogo');
  expect(footer[0]).toBeInTheDocument();
});