import React from 'react';
import styled from 'styled-components';
import About from '../components/About';

const AboutStyle = styled.div`
  .accordionStyle {
    background-color: transparent !important;
  }
`;
export default function AboutView() {
  return (
    <div>
      <AboutStyle>
        <About />
      </AboutStyle>
    </div>
  );
}
