import {rest} from 'msw' // msw supports graphql too!
import { mockTvShows } from './tv-show.mock';


const handlers = [
  rest.get('https://api.tvmaze.com/search/shows', async (req, res, ctx) => {
    return res(ctx.json(mockTvShows()))
  }),
]

export {handlers}