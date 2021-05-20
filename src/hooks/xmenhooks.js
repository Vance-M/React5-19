import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/apiUtils';


export const useXmen = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(pageNumber)
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return { loading, characters };
};
