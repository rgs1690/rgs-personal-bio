import React from 'react';
import styled from 'styled-components';

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
        <h1>Grace Sutherland</h1>
        <h2>Front-End Software Developer</h2>
      </div>
    </HomeStyle>
  );
}
