import { render, screen, cleanup } from '@testing-library/react';
import { TopMenu } from './TopMenu';

afterEach(() => {
  cleanup();
});

test('to test top menu by testId', () => {
  render(<TopMenu />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});

test('to test top menu bar & all its elements are loaded', () => {
  render(<TopMenu />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  expect(linkElement.querySelectorAll('li').length).toEqual(6);
});

