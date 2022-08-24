export default class TvApiService {
    private static readonly API_URL = 'https://api.tvmaze.com';

    static searchShows(query: string) {
        const baseUrl = new URL(`${TvApiService.API_URL}/search/shows`);
        baseUrl.searchParams.append('q', query);
        return fetch(baseUrl);
    }

    static getById(id: any) {
        return fetch(`${TvApiService.API_URL}/shows/${id}`);
    }
}