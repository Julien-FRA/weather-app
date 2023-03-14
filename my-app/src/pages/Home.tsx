import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container-home">
      <Link to="/add" className='btn-home'>Ajouter</Link>
      <Link to="/weather" className='btn-home'>Consulter</Link>
    </div>
  )
}

export default Home