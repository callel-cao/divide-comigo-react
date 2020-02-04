import React, { useState, useEffect } from 'react';
import {
  Header,
  Cards
} from './component';
import HttpService from './service/http';
import './reset.scss';
import { async } from 'q';

function App() {

  const [pokemons, getPokemons] = useState({});
  const [pokemonName, getPokemonName] = useState('1');
  const [pokemonStatus, getPokemonStatus] = useState({ open: false });
  const [loading, setLoading] = useState(true);

  const getName = (event) => {
    getPokemonName(event.currentTarget.getAttribute('data-name'));
  }

  useEffect(() => {
    async function loadData() {
      console.log(await HttpService.get('pokemon?limit=100'));
      const { results } = await HttpService.get('pokemon?limit=100');
      getPokemons(results);
      setLoading(false);
    }

    loadData();
  }, []);


  useEffect(() => {
    async function loadPokemonData() {
      console.log(await HttpService.get('pokemon/' + pokemonName));
      // getStatus(results);
    }

    loadPokemonData();
  }, [pokemonName]);

  return (
    <>
      <Header />

      {!loading &&
        <Cards pokemons={pokemons} funcname={getName} />
      }

    </>
  );
}

export default App;
