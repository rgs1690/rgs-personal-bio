import React from 'react';
import Tech from '../components/Tech';

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
      {techArray.map((tech) => (
        <Tech tech={tech} key={tech.id} />
      ))}
    </div>
  );
}
