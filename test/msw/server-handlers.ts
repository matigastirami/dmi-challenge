import { rest } from "msw"; // msw supports graphql too!
import { mockTvShows } from "../mocks/tv-show.mock";

const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_TVMAZE_API_URL!}/search/shows`,
    async (req, res, ctx) => {
      return res(ctx.json(mockTvShows()));
    }
  ),
];

export { handlers };
