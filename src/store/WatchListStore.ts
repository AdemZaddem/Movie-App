import { create } from "zustand";
import type { Movie, WatchList } from "../types";

export const useWatchListStore = create<WatchList>(set =>({
    items:[],
    addItem:(item:Movie)=> set(s => ({
        items:[...s.items,{...item,isWatched:false}]
    })),
    removeItem:(id) =>set(s=>({
        items:s.items.filter(movie => movie.id !== id)
    })),
    toggleWatch:(id)=>set(s => ({
        items:s.items.map(item => item.id === id ? {...item,isWatched:!item.isWatched}:item)
    }))
}))