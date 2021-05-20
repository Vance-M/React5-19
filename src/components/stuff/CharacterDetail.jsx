import React, { useState, useEffect } from 'react';
import { fetchSingleCharacter } from '../../services/apiUtils';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { Xmenid } = useParams();


  useEffect(() => {
    fetchSingleCharacter(Xmenid)
      .then(character => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);

   
  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <img src={character.img} alt={character.name} />
        <h1>{character.name}</h1>
        <p>{character.alias}</p>
        <p>{character.description}</p>
      </div>
    </div>
  );
}
