export default class TvApiService {
    static searchShows(query: string): Promise<Response> {
        const baseUrl = new URL(`${process.env.NEXT_PUBLIC_TVMAZE_API_URL}/search/shows`);
        baseUrl.searchParams.append('q', query);
        return fetch(baseUrl);
    }

    static getById(id: any): Promise<Response> {
        return fetch(`${process.env.NEXT_PUBLIC_TVMAZE_API_URL}/shows/${id}`);
    }
}