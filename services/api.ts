export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    ACCESS_KEY: process.env.EXPO_PUBLIC_TMDB_ACCESS_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {

    const endpoint = query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        : `/discover/movie?include_adult=false&include_video=true&language=en-US&sort_by=popularity.desc`;

    const res = await fetch(TMDB_CONFIG.BASE_URL + endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });


    if (!res.ok) {
        throw new Error(`Error fetching movies: ${res.statusText}`);
    };

    const data = await res.json();


    return data.results;
}