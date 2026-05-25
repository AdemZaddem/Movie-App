import type { Movie } from "../types";
import { Star, Eye, Trash2,EyeOff } from "lucide-react";
import  {useWatchListStore}  from "../store/WatchListStore";

function WatchedMovieCard({ item }: { item: Movie }) {
   const {removeItem,toggleWatch} = useWatchListStore()

  return (
    <div className="flex gap-4 bg-white/5 rounded-[12px] border border-white/10 p-4 hover:border-white/20 transition-all justify-between">
      <div className="flex gap-4">
        <div>
          <img
            src={item.image?.medium}
            className="w-20 h-[120px] object-cover rounded-[12px]"
            alt={item.name}
          />
        </div>
        <div className="text-white flex flex-col gap-2">
          <p className="font-semibold">{item.name}</p>
          <div className="flex gap-2">
            {item.genres.slice(0, 2).map((genre) => (
              <p className="bg-white/10 rounded-[999px] px-2 text-sm">
                {genre}
              </p>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <Star fill="orange" color="orange" size={16} />
            <p className="text-orange-400 text-md font-medium">
              {item.rating.average ?? "N/A"}
            </p>
          </div>
          {item.isWatched ? (
            <p className="text-xs text-green-500 bg-green-500/5 w-fit rounded-[999px] px-2 border border-green-500">Watched</p>
          ):(
            <p className="text-xs text-white/40 bg-white/5 w-fit rounded-[999px] px-2 border border-white/10">Unwatched</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center">
        <button onClick={()=>toggleWatch(item.id)} className="border border-white/10 p-1 rounded-[12px] hover:border-amber-400/50 transition-all cursor-pointer">
            {item.isWatched ? (
                <EyeOff size={20} strokeWidth={1} color="#ddd" />
            ):(<Eye
            strokeWidth={1}
            color="#ddd"
            size={20}
          />)}
          
        </button>

        <button onClick={()=>removeItem(item.id)} className="border border-white/10 p-1 rounded-[12px] hover:border-red-500/50 hover:bg-red-500/10 transition-all cursor-pointer">
          <Trash2 strokeWidth={1} color="red" size={20} />
        </button>
      </div>
    </div>
  );
}

export default WatchedMovieCard;
