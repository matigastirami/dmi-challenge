import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Detail from "../Detail";

const getByTextWithMarkup = (text: string) => {
  getByText((content, node) => {
    const hasText = (node: HTMLElement) => node.textContent === text;
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child as HTMLElement)
    );
    return hasText(node) && childrenDontHaveText;
  });
};

test("Should render a detail component sucessfully", async () => {
  render(<Detail id={10} />);

  await waitFor(() => screen.getAllByRole("show-detail"), { timeout: 5000 });

  const nodes = screen.getAllByRole("show-detail");

  expect(nodes).toHaveLength(1);

  const { className } = nodes[0];

  expect(className).toBe("detail");

  const infoNodes = nodes[0].getElementsByTagName("span");

  expect(infoNodes[0].textContent).toBe("Channel: History");
  expect(infoNodes[1].textContent).toBe("Country: United States");
  expect(infoNodes[2].textContent).toBe("Site: Click here");
  expect(infoNodes[3].textContent).toBe("Status: Ended");
  expect(infoNodes[4].textContent).toBe("Genres: test1, test2");
  expect(infoNodes[5].textContent).toBe("IMDB: tt1112283");
  expect(infoNodes[6].textContent).toBe("Rating: 7.2");
});

test("Should fail a if the show id does not exist", async () => {
  render(<Detail id={9999} />);

  await waitFor(
    () => screen.getByText("Could not fetch info the the selected show"),
    { timeout: 5000 }
  );

  const node = screen.getByText("Could not fetch info the the selected show");

  expect(node).toBeDefined();
  expect(node.tagName).toBe("H2");
});
