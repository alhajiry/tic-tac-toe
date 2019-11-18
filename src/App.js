import React from 'react';
import styled from 'styled-components';
import Game from './components/game';
import NavBar from './components/navbar';


const Wrapper = styled.div`
    text-align: center;
    padding : 4em;
    background : ${props => (props.dark ? '#8b8b8b' : '#e18696')}
`;

const Section = styled(Wrapper)`
    color : yellow;
`;

const Header = styled.h1`
    background: #000;
    color: #fff;
`;

function App() {
  return (
    <div className='App'>
        <NavBar />
      <Wrapper>
      <Header>Tic Tac Toe</Header>
      <Game />
      </Wrapper>
      <Section dark>Dari Wrapper</Section>
    </div>
  );
}

export default App;