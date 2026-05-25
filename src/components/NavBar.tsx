import React, { useState } from "react";
import { Bookmark, Search } from "lucide-react";
import { useDebounce } from "../hooks/useDebounce";
import { useSerchStore } from "../store/searchStore";
import { Link } from "react-router-dom";

function NavBar() {
  const { query, setQuery } = useSerchStore();

  return (
    <div className="w-full text-white fixed border-b top-0 border-[#2c2c2c] bg-[#0f0f0f]/80 backdrop-blur-md z-50">
      <div className="flex flex-col items-center gap-3 justify-between max-w-[1200px] mx-auto p-4 md:flex-row items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-amber-500/80">ShowTime</h1>
        </Link>

        <div className="flex relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
          />
          <input
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            placeholder="Search for show..."
            className="bg-white/5. placeholder:text-sm border border-white/10 pr-6 rounded-[999px] w-[400px] p-2 pl-12 focus:outline-none focus:border-amber-500/50 transition-colors"
            type="text"
          />
        </div>

        <Link to={"/watchlist"}>
          <button className="flex gap-2 border border-gray-500 shadow-lg p-2 rounded-[12px] transition duration-200 hover:border-amber-500/50">
            <Bookmark />
            <p>My Watchlist</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
