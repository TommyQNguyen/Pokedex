import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const mockData = [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    }
]

const PokeList = () => {

  return (
    <Wrapper>

    {mockData.map( (data) => {

      return ( 
        <PokeLink to={`pokemon/${data.name}`}>
          <PokemonName>{data.name}</PokemonName>
        </PokeLink>
        );
    })}

    </Wrapper>
  )

}

export default PokeList;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PokemonName = styled.div`
  font-size: 25px;
  text-transform: capitalize;
  padding: 20px;
  margin: 10px;
  border: 1px solid darkgray;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  min-width: 35vw;
  cursor: pointer;
`

const PokeLink = styled(Link)`
  text-decoration: none;
  color: black;
`