/* eslint-disable max-len */
import React from 'react';
import CharactersList from '../components/stuff/CharacterList';
import { useXmen } from '../hooks/xmenhooks';
import { useState } from 'react';

const Xmen = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, characters } = useXmen(pageNumber);

  if(loading) return <p>Loading...</p>;

  const prev = () => {
    if(pageNumber > 1){setPageNumber((prevPage) => prevPage - 1);
    }
  };
  const next = () => {
    if(pageNumber < 2){setPageNumber((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <button onClick={prev}>Prev Page</button>
      <button onClick={next}>Next Page</button>      
      <CharactersList characters={characters} />
    </div>
  );
};

export default Xmen;
