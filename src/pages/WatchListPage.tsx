import { useState } from "react";
import { useWatchListStore } from "../store/WatchListStore";
import WatchedMovieCard from "../components/WatchedMovieCard";
import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

function WatchListPage() {
  const [activeTab, setActiveTab] = useState<"all" | "watched">("all");
  const items = useWatchListStore((s) =>s.items)
  const filteredItems = activeTab === 'all'?items:items.filter(item => item.isWatched)

  
  return (
    <div className="mt-30 max-w-[800px] mx-auto flex flex-col gap-6">
      <header className="text-white">
        <h1 className="text-4xl font-bold mb-2">My WatchList</h1>
        <p className="text-gray-500">{items.length <= 1 ? `${items.length} show saved`:`${items.length} shows saved`}</p>
      </header>
      <div className="flex text-gray-500 flex gap-5 text-lg border-b border-white/10">
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-3 px-4 transition-colors relative ${activeTab === "all" ? "text-amber-500" : "text-gray-500 hover:text-white"}`}
        >
          All
          {activeTab === 'all' && (
            <div className="absolute h-0.5 bottom-0 right-0 left-0 bg-amber-500"/>
          )}
        </button>
        <button
          onClick={() => setActiveTab("watched")}
          className={`pb-3 px-4 transition-colors relative ${activeTab === "watched" ? "text-amber-500" : "text-gray-500 hover:text-white"}`}
        >
          Watched
          {activeTab === 'watched' && (
            <div className="absolute h-0.5 bottom-0 right-0 left-0 bg-amber-500"/>
          )}
        </button>
      </div>
      {items.length === 0?(
        <div >
            <div className="flex flex-col items-center h-[300px] justify-center">
                <Bookmark size={70} strokeWidth={2} color="gray"/>
                <p className="text-xl text-white/20">No Shows in your watchlist yet</p>
                <Link to={'/'} className="text-amber-500 transition-colors hover:text-amber-500/80">Discover shows</Link>
            </div>
            
        </div>
      ):(
        <div className="flex flex-col gap-4">
        {filteredItems.map(item =>(
            <WatchedMovieCard key={item.id} item={item}/>
        ))}
      </div>
      )}
      
    </div>
  );
}

export default WatchListPage;
