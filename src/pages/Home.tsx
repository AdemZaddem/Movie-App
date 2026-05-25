import React from 'react'
import ShowList from '../components/ShowList'
import { useSerchStore } from '../store/searchStore'
import { useDebounce } from '../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { allShows, searchShow } from '../api/show'
import type { Movie } from '../types'

function Home() {
  const {query} = useSerchStore()
  const queryDebounce = useDebounce(query,600)

  const {data} = useQuery<Movie[]>({
    queryKey:queryDebounce ?['search',queryDebounce]:['search'],
    queryFn:async ()=>{
      if(queryDebounce){
        const result = await searchShow(queryDebounce)        
        return result.map(r=>r.show)
      }
      return allShows()
    }
  })

  return (
    <div className='flex flex-col justify-center mt-50 md:mt-30'>
      <header className='text-white text-center mb-10'>
        <h1 className='text-4xl font-bold mb-2'>Discover Shows</h1>
        <p className='text-gray-500 text-xl'>Search anything you want to watch</p>
      </header>
      <ShowList shows={data?.slice(0,24) ?? []}/>
    </div>
  )
}

export default Home
