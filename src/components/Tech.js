import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

export default function Tech({ tech }) {
  return (
    <div>
      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={tech.href} />
      </Figure>
    </div>
  );
}

Tech.propTypes = {
  tech: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};
