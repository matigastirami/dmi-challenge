import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { SearchTermContext } from "../../pages";
import CardList from "../CardList";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <SearchTermContext.Provider {...providerProps}>
      {ui}
    </SearchTermContext.Provider>,
    renderOptions
  );
};

test("should render cards list with a valid search term", async () => {

  const providerProps = {
    value: {
      searchTerm: "girl",
    },
  };

  customRender(<CardList />, { providerProps });

  await waitFor(() => screen.getAllByRole('card'), { timeout: 10000 });
  
  const cards = screen.getAllByRole('card');

  expect(cards).toHaveLength(3);
});


test("should nothing when the API returns empty result", async () => {

  const providerProps = {
    value: {
      searchTerm: "test",
    },
  };

  customRender(<CardList />, { providerProps });

  await waitFor(() => screen.getByText('No cards found, try searching another thing :)'), { timeout: 10000 });
  
  const cards = screen.getByText('No cards found, try searching another thing :)');

  expect(cards).toBeDefined();
});
