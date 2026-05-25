import { create } from "zustand";
import type { SearchStore } from "../types";

export const useSerchStore = create<SearchStore>((set)=>({
    query:'',
    setQuery:(query:string)=>set({query})
}))