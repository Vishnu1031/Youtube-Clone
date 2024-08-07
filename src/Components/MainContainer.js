import React from 'react'
import VideoContainer from './VideoContainer'
import Genre from './Genre'

const MainContainer = () => {
  return (
    <div className='p-4'>
      <Genre />
      <VideoContainer/>
    </div>
  )
}

export default MainContainer