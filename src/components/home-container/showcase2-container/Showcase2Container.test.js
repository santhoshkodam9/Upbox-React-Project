import { render, screen, cleanup } from '@testing-library/react';
import { Showcase2Container } from './Showcase2Container';

afterEach(() => {
  cleanup();
});

const items = {
  type: "showcase2",
  title: "Review your custom box",
  content: "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
  image: "./assets/work2.png",
  showdowImage: "./assets/work2-art.png"
}

test('to test showcase container2 component loaded', () => {
  render(<Showcase2Container key="1" item={items} index="1" />);
  const showcase2 = screen.getByTestId("showcase-container");
  expect(showcase2).toBeInTheDocument();
});

test('to test showcase container2 title', () => {
  render(<Showcase2Container key="1" item={items} index="1" />);
  const showcase2Title = screen.getAllByText(/Review your custom box/i);
  expect(showcase2Title[0]).toBeInTheDocument();
  expect(showcase2Title[0]).toHaveTextContent("Review your custom box");
});

test('to test showcase container2 image loaded', () => {
  render(<Showcase2Container key="1" item={items} index="1" />);
  const showcase2Image = screen.getAllByAltText('pic');
  expect(showcase2Image[0]).toBeInTheDocument();
});