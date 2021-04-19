import React from 'react';
import PokeCard from '../components/cards/Cards';
import Header from '../components/Header';

const HomePage  = (props) => {
  return(
    <div>
      <Header/>
      <div>
      <PokeCard/>
      </div>
    </div>
  )
}
export default HomePage;