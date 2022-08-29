const fetchPolifill = require("whatwg-fetch");
import {server} from '../msw/server'

global.fetch = fetchPolifill.fetch;

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())