import { rest } from "msw";
import { mockTvShows } from "../mocks/tv-show-list.mock";
import { mockTvShow } from "../mocks/tv-show.mock";

const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_TVMAZE_API_URL!}/search/shows`,
    async (req, res, ctx) => {
      const q = req.url.searchParams.get("q");

      if (q === "test") {
        return res(ctx.json([]));
      }

      return res(ctx.json(mockTvShows()));
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_TVMAZE_API_URL!}/shows/:id`,
    async (req, res, ctx) => {
      const { id } = req.params;

      if (id === "9999") {
        return res(
          ctx.status(400),
          ctx.json({
            name: "Not Found",
            message: "Page not found.",
            code: 0,
            status: 404,
            previous: {
              name: "Invalid Route",
              message: 'Unable to resolve the request "shows/".',
              code: 0,
            },
          })
        );
      }

      return res(ctx.json(mockTvShow()));
    }
  ),
];

export { handlers };
