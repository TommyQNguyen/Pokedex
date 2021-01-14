import React from 'react';

import styled from 'styled-components';

const Header = () => {

    return (
        <Wrapper>
            <Title>Pokedex</Title>

            <Container>
                <Link>Home</Link>
                <Link>About me</Link>
            </Container>

            <SearchBar></SearchBar>
        </Wrapper>
        );
}

export default Header;

const Wrapper = styled.header`
    background-color: plum;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const Title = styled.h1`
    color: yellow;
`

const Container = styled.nav`
display: flex;

`

const Link = styled.div`
    color: #FFF;
    font-size: 30px;
    margin: 20px;
`

const SearchBar = styled.input`

`

