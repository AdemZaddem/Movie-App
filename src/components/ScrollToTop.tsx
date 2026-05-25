import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const {pathname} = useLocation()
  console.log('pathname changed',pathname);
  

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return null
}

export default ScrollToTop
