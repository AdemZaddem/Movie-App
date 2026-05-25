import api from "./axios";
import type { Movie,SearchResult,Episodes } from "../types";

export async function allShows(): Promise<Movie[]> {
    const { data } = await api.get<Movie[]>("/shows");
    return data
}

export async function getShow(id:number):Promise<Movie>{
    const {data} = await api.get<Movie>(`/shows/${id}`)
    return data
}

export async function searchShow(query:string):Promise<SearchResult[]>{
    const {data} = await api.get<SearchResult[]>(`search/shows?q=${query}`)
    return data
    
}

export async function getEpisodes(showId:number):Promise<Episodes[]>{
    const {data} = await api.get<Episodes[]>(`/shows/${showId}/episodes`)
    return data
}


