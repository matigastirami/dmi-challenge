const fetchPolifill = require("whatwg-fetch");
import {server} from '../msw/server'

global.fetch = fetchPolifill.fetch;

jest.setTimeout(15000);

beforeAll(() => {
    server.listen();
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())