import { render, screen, cleanup } from '@testing-library/react';
import { NavBar } from './navbar';

afterEach(() => {
  cleanup();
});
test('to test menu bar by testId', () => {
  const sampleMenuData = [
    {
      type: "link",
      title: "SALE",
    },
    {
      type: "button",
      title: "LOGIN >",
    }
  ];
  render(sampleMenuData.map((item, index) => <NavBar key={index} item={item} index={index} />))
  const topMenuComp = screen.getAllByTestId("nav-element");
  expect(topMenuComp[0]).toBeInTheDocument();
  expect(topMenuComp.length).toBe(2);
  const titleText = screen.getAllByText(/sale/i);
  expect(titleText[0]).toHaveTextContent("SALE");
});
