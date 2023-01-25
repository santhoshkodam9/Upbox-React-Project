import { render, screen, cleanup } from '@testing-library/react';
import { Showcase1Container } from './Showcase1Container';

afterEach(() => {
  cleanup();
});

const items = {
  type: "showcase1",
  title: "Setup your profile & preferences",
  content: "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
  image: "./assets/work1.png"
}

test('to test showcase container1 component loaded', () => {
  render(<Showcase1Container key="1" item={items} index="1" />);
  const showcase1 = screen.getByTestId("showcase-container");
  expect(showcase1).toBeInTheDocument();
});

test('to test showcase container1 title', () => {
  render(<Showcase1Container key="1" item={items} index="1" />);
  const showcase1Title = screen.getAllByText(/Setup your profile & preferences/i);
  expect(showcase1Title[0]).toBeInTheDocument();
  expect(showcase1Title[0]).toHaveTextContent("Setup your profile & preferences");
});

test('to test showcase container1 image loaded', () => {
  render(<Showcase1Container key="1" item={items} index="1" />);
  const showcase1Image = screen.getAllByAltText('pic');
  expect(showcase1Image[0]).toBeInTheDocument();
});