import axios from 'axios';
import React , {useState} from 'react';
import PokeCard from '../components/cards/Cards';
import Header from '../components/Header';
import {baseUrl} from '../constants/urls';
import useRequestData from '../hooks/useRequestData';

const HomePage  = (props) => {
  const pokeList = useRequestData([], `${baseUrl}pokemon?limit=20`)
  /* const [PokeAdd, setPokeAdd] = useState() */
  const [pokeImage, setPokeImage] = useState('')

const getImage = (name) => {
    axios.get(`${baseUrl}pokemon/${name}`)
    .then((response) => setPokeImage(response.data.sprites.front_default))
    .catch((error) => console.log(error))
  }  

  const pokeComponents = pokeList.results && pokeList.results.map((poke) => {
    return(
    <PokeCard
      name={poke.name}
      poke={poke.name}
      /* image={getImage}  */ // como chamar no image o axios da imagem
      title={'Adicionar à pokedex'}
    />
    )
  })

  /* const addToPokedex = (pokeToAdd) => {
    
  } */

  return(
    <div>
      <Header/>
      <div>
      {pokeComponents}
      </div>
    </div>
  )
}
export default HomePage;