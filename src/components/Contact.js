import React from 'react';
import { ListGroup, Figure } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          {' '}
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"
          />
          rgs1690@gmail.com
        </ListGroup.Item>
        <ListGroup.Item>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          />
          <a
            href="https://www.linkedin.com/in/grace-sutherland4724/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me!
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
          />
          <a
            href="https://github.com/rgs1690"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my work!
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
