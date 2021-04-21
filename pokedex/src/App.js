import ContextPokemons from './contexts/contexts'
import {useGetApi} from './hooks/useRequest'
import React, {useState, useEffect} from 'react'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import PokedexPage from './pages/PokedexPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  const [pokemonListUrl, getApiPokemonListUrl] = useGetApi()
  const [auxApi, getAuxApi] = useGetApi()
  const [pokemons, setPokemons] = useState([])
  const [pokemonsAdded, setPokemonsAdded] = useState([])
  const [allPokemons, setAllPokemons] = useState([])

  const addPoke=(pokemon)=>{
    //  adicionar aqui pokemons selecionados
    console.log('cliquei no "Adicionar a pokedex"')
  }

  const removePoke=(pokemon)=>{
    //  remover dos pokemons selecionados
  }

  useEffect(()=>{
    getApiPokemonListUrl('pokemon?limit=5', null, (res, setValue)=>{
      setValue(res.data)
    })
  },[])
  useEffect(()=>{
    if(pokemonListUrl && pokemonListUrl.results) {
      if(pokemons.length<pokemonListUrl.results.length) {
        const poke = pokemonListUrl.results[pokemons.length]
        getAuxApi(poke.url.replace('https://pokeapi.co/api/v2/', ''), null, (res, setValue) => {
          const body = {}
          body.name = res.data.name
          body.hp = res.data.stats[0].base_stat
          body.attack = res.data.stats[1].base_stat
          body.defense = res.data.stats[2].base_stat
          body.specialAttack = res.data.stats[3].base_stat
          body.specialDefense = res.data.stats[4].base_stat
          body.speed = res.data.stats[5].base_stat
          body.imageFront = res.data.sprites.front_default
          body.imageBack = res.data.sprites.back_default

          const auxTypes = []
          for (let i = 0; i < res.data.types.length; i++) {
            auxTypes.push(res.data.types[i].type.name)
          }
          body.types = [auxTypes]

          const auxMoves = []
          for (let i = 1; i < res.data.moves.length; i++) {
            auxMoves.push(res.data.moves[i].move.name)
          }
          body.moves = [auxMoves]

          const aux = [...pokemons, body]
          setPokemons(aux)
        })
      }
    }
  },[pokemons, pokemonListUrl])

  useEffect(()=>{
    setAllPokemons({pokemons, pokemonsAdded, addPoke, removePoke})
  },[pokemons, pokemonsAdded])

  return (
    <ContextPokemons.Provider value={allPokemons}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route exact path={'/pokedex'}>
            <PokedexPage />
          </Route>
          <Route exact path={'/details'}>
            <DetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextPokemons.Provider>
  );
}

export default App;
