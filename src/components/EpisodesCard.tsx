import type { Episodes } from '../types'
import { Clock } from 'lucide-react'

function EpisodesCard({name,number,runtime,airdate}:Episodes) {
  return (
    <div className='flex bg-[#2d2d2d] rounded-[12px] p-4 items-center gap-5 duration-200 border border-[#545353] transition hover:border-[#787777] hover:-translate-y-1'>
      <div className='bg-[#444343] py-4 px-6 rounded-[12px]'>
        {number}
      </div>
      <div>
        <p>{name}</p>
        <p className='flex gap-4'><span>{airdate}</span><span className='flex items-center gap-1'><Clock size={17} />{runtime} min</span></p>
      </div>
    </div>
  )
}

export default EpisodesCard
