import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
import { COLORS } from "../utils/theme";
import { POKEMON_API_URL, GEN_5_LIMIT } from "../utils/constants";

const PokeList = () => {
  const [value, setValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${POKEMON_API_URL}/pokemon?limit=${GEN_5_LIMIT}`)
      .then((data) => data.json())
      .then((data) => setPokemonList(data.results))
      .then(() => console.log("done Fetching..."));
  }, []); // Runs only once first render

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const matchedSuggestions = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(value.toLowerCase());
  });

  // console.log(pokemonList);

  console.log("render");

  return (
    <Wrapper>
      <SearchContainer>
        <Input type="text" value={value} onChange={handleOnChange}></Input>
        <ClearButton onClick={() => setValue("")}>Clear</ClearButton>
      </SearchContainer>
      {pokemonList
        .filter((pokeObject) => pokeObject.name.toLowerCase().includes(value))
        .map((pokeObject) => {
          return (
            <PokeLink key={pokeObject.name} to={`pokemon/${pokeObject.name}`}>
              <PokeContainer>
                <PokemonName>{pokeObject.name}</PokemonName>
                {/* <PokemonNationalNum>
                  #{("000" + (index + 1)).slice(-3)}
                </PokemonNationalNum> */}
              </PokeContainer>
            </PokeLink>
          );
        })}
    </Wrapper>
  );
};

export default PokeList;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3vw;
  width: 800px;
  margin: auto;
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
}
`;

const SearchContainer = styled.div`
  grid-column: 1/4;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

const Input = styled.input`
  /* width: 150px; */
  height: 40px;
  padding: 20px 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
`;

const ClearButton = styled(Button)`
  margin-left: 1vw;
`;

const PokeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;

  &:hover {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 50px #9ecaed;
    animation: ${shake} 0.5s;
  }
`;

const PokemonName = styled.div`
  font-size: 25px;
  color: ${COLORS.primary};
  text-transform: capitalize;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const PokemonNationalNum = styled.span`
  color: ${COLORS.statName};
`;

const PokeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
