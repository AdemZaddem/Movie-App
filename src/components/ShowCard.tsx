import type { Movie } from "../types";
import { Star, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useWatchListStore } from "../store/WatchListStore";

function ShowCard({ show }: { show: Movie }) {
  const { items, addItem, removeItem } = useWatchListStore();
  const isInWatchList = items.find((item) => item.id === show.id);
  return (
    <div className="text-white flex flex-col rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer">
      {/* image */}
      <Link to={`/show/${show.id}`}>
        <div className="relative overflow-hidden h-[280px]">
          <img
            src={show.image?.medium}
            alt={show.name}
            className="w-full h-full object-cover"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* rating badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star fill="orange" color="orange" size={12} />
            <p className="text-orange-400 text-xs font-medium">
              {show.rating.average ?? "N/A"}
            </p>
          </div>
        </div>
      </Link>

      {/* content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <Link to={`show/${show.id}`}>
        <p className="font-bold text-white text-base line-clamp-1 hover:text-amber-500 transition-colors">
          {show.name}
        </p>
        </Link>

        {/* genres */}
        <div className="flex flex-wrap gap-1">
          {show.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-2 py-0.5 text-xs"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* summary */}
        <p
          className="text-gray-400 text-sm line-clamp-2 flex-1"
          dangerouslySetInnerHTML={{
            __html: show.summary ?? "No summary available",
          }}
        />

        {/* button */}
        <button
          onClick={() => (isInWatchList ? removeItem(show.id) : addItem(show))}
          className={`${isInWatchList?'bg-amber-500/80 hover:bg-amber-500/70 text-black':"hover:bg-amber-500/10 hover:text-amber-400"} flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/50 rounded-xl p-2 text-sm transition-all duration-200 mt-auto`}
        >
          {isInWatchList ? (
            <>
            <Check size={16}/>
            <span>In WatchList</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>Add to WatchList</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
