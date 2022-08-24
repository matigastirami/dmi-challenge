import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { SearchTermContext } from "../../pages";
import TvApiService from "../../services/tv-api.service";
import CardList from "../CardList";
import { mockTvShows } from "./helper/tv-show.mock";

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
