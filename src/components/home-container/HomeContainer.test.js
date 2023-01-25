import { render, screen, cleanup } from '@testing-library/react';
import { HomeContainer } from './HomeContainer';

afterEach(() => {
  cleanup();
});

test('to test Home Container by testId', () => {
  render(<HomeContainer />);
  const homeContainer = screen.getByTestId("home-container");
  expect(homeContainer).toBeInTheDocument();
});

test('to test Home Container & all its sub components are loaded', () => {
  render(<HomeContainer />);
  const homeContainer = screen.getByTestId("home-container");
  expect(homeContainer).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  expect(homeContainer.querySelectorAll('div p').length).toEqual(4);
});