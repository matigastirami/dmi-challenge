import { rest } from "msw"; // msw supports graphql too!
import { mockTvShows } from "../mocks/tv-show.mock";

const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_TVMAZE_API_URL!}/search/shows`,
    async (req, res, ctx) => {
      const q = req.url.searchParams.get('q');

      if(q === 'test') {
        return res(ctx.json([]));
      }

      return res(ctx.json(mockTvShows()));
    }
  ),
];

export { handlers };
