import { render, screen, cleanup } from '@testing-library/react';
import { Showcase } from './showcase';

afterEach(() => {
  cleanup();
});
test('to test showcase containers', () => {
  const items = [
    {
      type: "showcase1",
      title: "Setup your profile & preferences",
      content: "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
      image: "./assets/work1.png"
    },
    {
      type: "showcase2",
      title: "Review your custom box",
      content: "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
      image: "./assets/work2.png",
      showdowImage: "./assets/work2-art.png"
    }
  ];

  render(items.map((item, index) => <Showcase key={index} item={item} index={index} />))
  const showCase = screen.getAllByTestId("showcase-container");
  expect(showCase[0]).toBeInTheDocument();
  expect(showCase.length).toBe(2);
});
