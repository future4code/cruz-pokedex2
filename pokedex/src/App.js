import ContextPokemons from "./contexts/contexts";
import { useGetApi, getApi } from "./hooks/useRequest";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/homePage/HomePage";
import DetailsPage from "./pages/details/DetailsPage";
import PokedexPage from "./pages/pokedex//PokedexPage";
import BattlePage from './pages/battle/BattlePage'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [pokemonListUrl, getApiPokemonListUrl] = useGetApi()
  const [pokemons, setPokemons] = useState([])
  const [pokemonsAdded, setPokemonsAdded] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [battle, setBattle] = useState([])

  const addPoke = (pokemon) => {
    const newList = [...pokemonsAdded, pokemon];
    setPokemonsAdded(newList)
    alert(`${pokemon.name} foi adicionado à Pokedex`)
    const pokemonIndex = pokemons.findIndex((poke) => poke.name === pokemon.name )
    const withdrawn = [...pokemons]
    withdrawn.splice(pokemonIndex, 1)
    setPokemons(withdrawn)
  }
  const removePoke = (pokemon) => {
    const pokemonIndex = pokemonsAdded.findIndex(
      (poke) => poke.name === pokemon.name
    );
    const removed = [...pokemonsAdded];
    removed.splice(pokemonIndex, 1);
    setPokemonsAdded(removed);
  };
  const nextPage = ()=>{
    if(pokemonListUrl.next){
      getApiPokemonListUrl(pokemonListUrl.next.replace('https://pokeapi.co/api/v2/',''),null,(res,setValue)=>{
        setValue(res.data)
      })
    }
  }
  const previousPage = ()=>{
    if(pokemonListUrl.previous){
      getApiPokemonListUrl(pokemonListUrl.previous.replace('https://pokeapi.co/api/v2/',''),null,(res,setValue)=>{
        setValue(res.data)
      })
    }
  }

  const getPokemons = (i, pokes)=>{
    if(pokemonListUrl && pokemonListUrl.results && pokemonListUrl.results.length>0) {
      if (i === pokemonListUrl.results.length){
        if(pokemonsAdded.length>0){
          pokemonsAdded.forEach((pokeAdd, index)=>{
            pokes.forEach((poke,i)=>{
              if(pokeAdd.name === poke.name){
                pokes.splice(i, 1)
              }
            })
          })
        }
        setPokemons(pokes)
        return
      }
      else {
        const url = pokemonListUrl.results[i].url.replace('https://pokeapi.co/api/v2/','')
        getApi(url, null, (res)=>{
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

          const auxTypes = [];
          for (let i = 0; i < res.data.types.length; i++) {
            auxTypes.push(res.data.types[i].type.name);
          }
          body.types = [auxTypes];

          const auxMoves = [];
          for (let i = 1; i < res.data.moves.length; i++) {
            auxMoves.push(res.data.moves[i].move.name);
          }
          body.moves = [auxMoves];
          pokes.push(body)
          getPokemons(i+1, pokes)
        })
      }
    }
  }
  useEffect(()=>{
    getApiPokemonListUrl('pokemon?limit=20', null, (res, setValue)=>{
      setValue(res.data)
    })
    const pokesAdd = window.localStorage.getItem('pokesAdd')
    if(pokesAdd){
      setPokemonsAdded(JSON.parse(pokesAdd))
    }
  },[])
  useEffect(()=>{
    window.localStorage.setItem('pokesAdd', JSON.stringify(pokemonsAdded))
  },[pokemonsAdded])
  useEffect(()=>{
    if(pokemonListUrl && pokemonListUrl.results) {
      const pokes = []
      getPokemons(0, pokes)
    }
  },[pokemonListUrl])
  useEffect(()=>{
    if(pokemonsAdded.length>0){
      const pokes = [...pokemons]
      pokemonsAdded.forEach((pokeAdd, index)=>{
        pokes.forEach((poke,i)=>{
          if(pokeAdd.name === poke.name){
            pokes.splice(i, 1)
          }
        })
      })
      // setPokemons(pokes)
    }
  },[pokemons])

  const states = {pokemons, pokemonsAdded, pokemonDetails, battle}
  const setters ={setPokemons, setPokemonsAdded, setPokemonDetails, setBattle}
  const functions = {addPoke, removePoke, nextPage, previousPage}

  return (
    <ContextPokemons.Provider value={{ states, setters, functions }}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/pokedex"}>
            <PokedexPage />
          </Route>
          <Route exact path={"/details"}>
            <DetailsPage />
          </Route>
          <Route exact path={'/battle'}>
            <BattlePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextPokemons.Provider>
  );
}

export default App;
