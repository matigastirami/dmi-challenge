export default class TvApiService {
    static searchShows(query: string) {
        const baseUrl = new URL(`${process.env.NEXT_PUBLIC_TVMAZE_API_URL}/search/shows`);
        baseUrl.searchParams.append('q', query);
        return fetch(baseUrl);
    }

    static getById(id: any) {
        return fetch(`${process.env.NEXT_PUBLIC_TVMAZE_API_URL}/shows/${id}`);
    }
}