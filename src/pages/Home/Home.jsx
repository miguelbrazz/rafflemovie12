import React from 'react';
import Raffle from '../../components/Raffle/Raffle';
import './Home.css'


const Home = () => {

  return (
    <div className="home">
        <main className='main container'>
          <div className='home-message'>
              <h1>MatchFX features<span> Raffle Movies</span></h1>
              <p>select up to <span>10 movies </span>and draw to find out which one to watch</p>
          </div>
          <Raffle />
        </main>
    </div>
  )
}

export default Home
