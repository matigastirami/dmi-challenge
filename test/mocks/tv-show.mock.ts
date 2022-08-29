export const mockTvShow = () => ({
  id: 4639,
  url: "https://www.tvmaze.com/shows/4639/conspiracy-test",
  name: "Conspiracy Test",
  type: "Documentary",
  language: "English",
  genres: ["test1", "test2"],
  status: "Ended",
  runtime: 60,
  averageRuntime: 60,
  premiered: "2007-04-02",
  ended: "2007-08-13",
  officialSite: 'http://test.com',
  schedule: { time: "", days: [] },
  rating: { average: 7.2 },
  weight: 36,
  network: {
    id: 53,
    name: "History",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
    officialSite: null,
  },
  webChannel: null,
  dvdCountry: null,
  externals: { tvrage: null, thetvdb: 249525, imdb: "tt1112283" },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/302/755457.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/302/755457.jpg",
  },
  summary:
    "<p>Delving into the theories behind some of the nation's biggest mysteries.</p>",
  updated: 1639087938,
  _links: {
    self: { href: "https://api.tvmaze.com/shows/4639" },
    previousepisode: { href: "https://api.tvmaze.com/episodes/297501" },
  },
});
