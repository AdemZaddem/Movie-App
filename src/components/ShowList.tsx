import ShowCard from './ShowCard'
import type { Movie} from '../types'

type ShowListProps = {
    shows:Movie[]
}

function ShowList({shows}:ShowListProps) {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 gap-4'>
      {shows.length === 0 ? (
        <p className='text-white text-center'>No shows found</p>
      ) : (
        shows?.map(show => <ShowCard key={show.id} show={show} />)
      )}
    </div>
  )
}

export default ShowList