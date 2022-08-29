type TvShowNetwork = {
  name: string;
  country: TvShowCountry;
};

type TvShowCountry = {
  code: string;
  name: string;
  timezone: string;
};

type TvShowExternals = {
  imdb?: string;
  thetvdb?: number;
  tvrage?: number;
};

type TvShowRating = {
  average?: number;
};

type TvShowImage = {
  medium?: string;
  original?: string;
};

export type TvShowDetail = {
  id: number;
  name: string;
  officialSite?: string;
  network?: TvShowNetwork;
  status?: string;
  genres?: Array<string>;
  externals: TvShowExternals;
  rating: TvShowRating;
  image: TvShowImage;
  summary: string;
};

export type TvShowList = Array<{
  show: TvShowDetail;
  score: number;
}>;
