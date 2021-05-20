import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


const CharactersList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      <li key={character.id}>
        <Character {...character} />
      </li>
    ))}
  </ul>
);

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,      
  }))
};

export default CharactersList;
