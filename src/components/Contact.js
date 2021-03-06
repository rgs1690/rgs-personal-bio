import React from 'react';
import styled from 'styled-components';
import { ListGroup, Figure } from 'react-bootstrap';

const ContactStyle = styled.div`
  margin-bottom: 5em;
  .ListGroup {
    width: 30em;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5em;
    border: 0 !important;
    background-color: transparent !important;
    border-radius: 200px;
  }
  img {
    width: 171px;
    height: 180px;
    border: 0;
    margin: 1em;
  }
  @media only screen and (max-width: 600px) {
    .ListGroup {
      width: 20em;
      margin-top: 1em;
    }
  }
`;
export default function Contact() {
  return (
    <div className="contactPage">
      <ContactStyle>
        <ListGroup className="ListGroup">
          <ListGroup.Item className="figure">
            {' '}
            <Figure.Image
              width={171}
              height={180}
              border={0}
              alt="171x180"
              src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"
            />
            <div>rgs1690@gmail.com</div>
          </ListGroup.Item>
          <ListGroup.Item className="figure">
            <a
              href="https://www.linkedin.com/in/grace-sutherland4724/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                target="_blank"
                alt="HTML tutorial"
              />{' '}
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="figure">
            <a
              href="https://github.com/rgs1690"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
                alt="githublogo"
              />{' '}
            </a>
          </ListGroup.Item>
        </ListGroup>
      </ContactStyle>
    </div>
  );
}
