import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuVisible = useSelector(store=>store.app.MenuState)

  if(!isMenuVisible)return;

  return (
    <div className='shadow-lg p-4  w-48 h-screen'>
        <ul>
            <li>Home</li>
            <li>History</li>
            <li>Subscribe</li>
            <li>live</li>
            <li>News</li>
            <li>Songs</li>
        </ul>
    </div>
  )
}

export default Sidebar