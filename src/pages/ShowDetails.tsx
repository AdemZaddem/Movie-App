import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate, data } from 'react-router-dom'
import { getEpisodes, getShow } from '../api/show'
import { Star, Globe, Plus, ArrowLeft,Check } from 'lucide-react'
import { useState } from 'react'
import type { Episodes } from '../types'
import EpisodesCard from '../components/EpisodesCard'
import { useWatchListStore } from '../store/WatchListStore'


function ShowDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {items,addItem,removeItem} = useWatchListStore()

  const { data: show, isLoading } = useQuery({
    queryKey: ['show', id],
    queryFn: () => getShow(Number(id))
  })

  const {data:episodes} = useQuery({
    queryKey:['episodes',id],
    queryFn:()=>getEpisodes(Number(id))
  })
  const seasons = new Set(episodes?.map(epo=>epo.season))
  const [activeSeason,setActiveSeason] = useState<number>(1)
  const seasonEpisodes:Episodes[] | undefined = episodes?.filter(episode => episode.season === activeSeason);
  const isInWatchList = items.find((item) => item.id === show?.id);
  
  
  
  
  if (isLoading) return <p className='text-white text-center mt-20'>Loading...</p>
  if (!show) return null

  return (
    <div className='relative min-h-screen text-white mt-30'>

      {/* hero image with gradient fade to dark */}
      <div
        className='w-full h-[450px] bg-cover bg-center rounded-4xl'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.3) 0%, rgba(15,15,15,1) 100%), url(${show.image?.original})`
        }}
      />

      {/* back button — on top of hero */}
      <button
        onClick={() => navigate(-1)}
        className='absolute top-8 left-4 flex items-center gap-2 text-gray-400 hover:text-white transition'
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* content — pulls up into the gradient */}
      <div className='flex items-start gap-10 px-4 pb-20 -mt-40 relative z-10'>

        {/* poster */}
        <img
          src={show.image?.medium}
          alt={show.name}
          className='w-[220px] rounded-xl shadow-2xl flex-shrink-0'
        />

        {/* info */}
        <div className='flex flex-col gap-4 mt-16'>
          <h1 className='text-5xl font-bold'>{show.name}</h1>

          {/* genres */}
          <div className='flex gap-2 flex-wrap'>
            {show.genres.map(genre => (
              <span
                key={genre}
                className='border border-white/30 px-3 py-1 rounded-full text-sm'
              >
                {genre}
              </span>
            ))}
          </div>

          {/* rating + language */}
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <Star fill='orange' color='orange' size={18} />
              <span className='text-orange-400 font-bold'>
                {show.rating.average ?? 'N/A'}
              </span>
            </div>
            <div className='flex items-center gap-1 text-gray-300'>
              <Globe size={16} />
              <span>{show.language}</span>
            </div>
          </div>

          {/* summary */}
          <p
            className='text-gray-300 max-w-[600px] leading-relaxed'
            dangerouslySetInnerHTML={{ __html: show.summary ?? '' }}
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

      <div>
        <h1 className='text-4xl font-bold mb-4'>Episodes</h1>
        <div className='flex gap-4 mb-8'>
          {Array.from(seasons).map(season => (
            <button onClick={() => setActiveSeason(season)} key={season} className={`bg-[#2d2d2d] rounded-[12px] px-4 py-2 transition duration-200 hover:-translate-y-1 ${activeSeason === season ?'bg-amber-500':''}`}>{`Season ${season}`}</button>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          {seasonEpisodes?.map(episode =>(
            <EpisodesCard key={episode.id} {...episode}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowDetails