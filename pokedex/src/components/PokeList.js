import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
import { Splash } from "../components/Splash";
import { COLORS } from "../utils/theme";
import { POKEMON_API_URL, GEN_5_LIMIT } from "../utils/constants";

const PokeList = () => {
  const [value, setValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedSuggestionIndex, setSelectionSuggestionIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetch(`${POKEMON_API_URL}/pokemon?limit=${GEN_5_LIMIT}`)
      .then((data) => data.json())
      .then((data) => setPokemonList(data.results))
      .then(() => console.log("done Fetching..."));
  }, []); // Runs only once first render

  const handleSelect = (name) => {
    // window.alert(name);
    history.push(`pokemon/${name}`);
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const matchedSuggestions = pokemonList.filter((pokeObject) =>
    pokeObject.name.toLowerCase().includes(value)
  );

  // No provided suggestions - either because the user hasn't typed anything yet,
  // or they've typed a string that doesn't match any strings
  const containsNoProvidedSuggestions =
    matchedSuggestions.length > 0 && value.length > 0;

  // console.log(pokemonList);

  console.log("render");

  return (
    <>
      <Splash />
      <Wrapper>
        <SearchContainer>
          <Input
            type="text"
            value={value}
            onChange={handleOnChange}
            onKeyDown={(event) => {
              switch (event.key) {
                case "Escape":
                  setValue("");
                  setSelectionSuggestionIndex(0);
                  break;
                case "Enter":
                  if (selectedSuggestionIndex > -1)
                    handleSelect(
                      matchedSuggestions[selectedSuggestionIndex].name
                    );
                  break;
                case "ArrowUp":
                  if (
                    selectedSuggestionIndex > -1 &&
                    containsNoProvidedSuggestions
                  )
                    setSelectionSuggestionIndex(selectedSuggestionIndex - 3);
                  break;
                case "ArrowDown":
                  if (
                    selectedSuggestionIndex < matchedSuggestions.length - 1 &&
                    containsNoProvidedSuggestions
                  )
                    setSelectionSuggestionIndex(selectedSuggestionIndex + 3);
                  break;
                case "ArrowLeft":
                  if (
                    selectedSuggestionIndex < matchedSuggestions.length - 1 &&
                    containsNoProvidedSuggestions
                  )
                    setSelectionSuggestionIndex(selectedSuggestionIndex - 1);
                  break;
                case "ArrowRight":
                  if (
                    selectedSuggestionIndex < matchedSuggestions.length - 1 &&
                    containsNoProvidedSuggestions
                  )
                    setSelectionSuggestionIndex(selectedSuggestionIndex + 1);
                  break;
                default:
                  break;
              }
              // console.log(selectedSuggestionIndex);
            }}
          ></Input>
          <ClearButton onClick={() => setValue("")}>Clear</ClearButton>
        </SearchContainer>
        {matchedSuggestions.map((pokeObject, index) => {
          const isSelected = selectedSuggestionIndex === index;
          return containsNoProvidedSuggestions ? (
            <PokeLink key={pokeObject.name} to={`pokemon/${pokeObject.name}`}>
              <div tabIndex={index + 1}>
                <PokeContainer
                  onMouseEnter={() => setSelectionSuggestionIndex(index)}
                  style={{
                    boxShadow: isSelected ? "0 0 50px #9ecaed" : "",
                  }}
                >
                  <PokemonName>{pokeObject.name}</PokemonName>
                  {/* <PokemonNationalNum>
                  #{("000" + (index + 1)).slice(-3)}
                </PokemonNationalNum> */}
                </PokeContainer>
              </div>
            </PokeLink>
          ) : (
            ""
          );
        })}
      </Wrapper>
    </>
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

const PokeContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-width: 15vw;
  background-color: white;
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  cursor: pointer;

  &:hover {
    outline: none;
    border-color: mediumslateblue;
    box-shadow: 0 0 50px mediumpurple;
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
