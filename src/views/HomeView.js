import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const HomeStyle = styled.div`
  h1 {
    text-align: right;
    margin-top: 3em;
    margin-right: 1em;
    font-size: 4em;
  }
  h2 {
    text-align: right;
    margin-top: 1em;
    margin-right: 3em;
    font-size: 2em;
  }
`;
export default function HomeView() {
  return (
    <HomeStyle>
      <div>
        <Typist>
          <h1>Grace Sutherland</h1>
          <h2>Painter</h2>
          <Typist.Backspace count={7} delay={300} />
          <h2>Baker</h2>
          <Typist.Backspace count={5} delay={300} />
          <h2>Front-End Software Developer</h2>
        </Typist>
      </div>
    </HomeStyle>
  );
}
