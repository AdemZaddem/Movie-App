import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ShowDetails from './pages/ShowDetails'
import ScrollToTop from './components/ScrollToTop'
import WatchListPage from './pages/WatchListPage'

function App() {
  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <div className='max-w-[1200px] mx-auto min-h-screen'>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/show/:id' element = {<ShowDetails/>}/>
        <Route path='/watchlist' element = {<WatchListPage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
