import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Properties from './components/Properties'
import GenreMovieList from './components/GenreMovieList'



function App() {
  return (
    <div >
      <Header/>
      <Slider />
      <Properties />
      <GenreMovieList />
    </div>
  )
}

export default App
