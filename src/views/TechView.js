import React from 'react';
import styled from 'styled-components';
import Tech from '../components/Tech';

const TechStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5em;

  Figure {
    margin: 3em;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 1em;
    justify-content: center;
    .techImage {
      width: 80px;
    }
  }
`;

export default function TechView() {
  const techArray = [
    {
      id: '10',
      href: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    {
      id: '11',
      href: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    },
    {
      id: '1',
      href: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    },
    {
      id: '3',
      href: 'https://cdn.worldvectorlogo.com/logos/git-bash.svg',
    },
    {
      id: '4',
      href: 'https://cdn.worldvectorlogo.com/logos/html5-2.svg',
    },
    {
      id: '5',
      href: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
    },
    {
      id: '6',
      href: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
    },
    {
      id: '7',
      href: 'https://cdn.worldvectorlogo.com/logos/styled-components-1.svg',
    },
    {
      id: '8',
      href: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
    },
    {
      id: '9',
      href: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
    },
  ];

  return (
    <div>
      <TechStyle>
        {techArray.map((tech) => (
          <Tech tech={tech} key={tech.id} />
        ))}
      </TechStyle>
    </div>
  );
}
