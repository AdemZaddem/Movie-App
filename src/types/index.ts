export type Movie = {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  language: string;
  isWatched:boolean
};

export type SearchResult = {
    show:Movie
}

export type Episodes = {
    id:number
    name:string
    season:number
    number:number
    runtime:number
    airdate:string
}

export type SearchStore={
  query:string
  setQuery:(query:string)=>void
}

export type WatchList={
  items:Movie[]
  addItem:(item:Movie)=>void
  removeItem:(id:number)=>void
  toggleWatch:(id:number)=>void
}