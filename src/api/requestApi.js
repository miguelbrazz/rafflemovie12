import { API_BASE, API_KEY, API_LANGUAGE} from './tmdb'

export default async (movie) => {
    return await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${movie}`).then(res => res.json())
}