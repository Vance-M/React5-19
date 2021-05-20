import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, img, alias, description, id }) => (
  <figure key={id}>
    <Link to={id}>
      <img src={img} alt={name} />
    </Link>
    <figcaption>
      <p>{name}</p>
      <p>{alias}</p>
      <p>{description}</p>
    </figcaption>
  </figure>
    
);




Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Character;
