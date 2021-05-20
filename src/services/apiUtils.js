/* eslint-disable max-len */
export const fetchCharacters = async (pageNumber) => {
  const res = await fetch(`https://xmenapiheroku.herokuapp.com/api/characters?page=${pageNumber}`);
  const { results } = await res.json();
   
  const mungedResults = results.map(result => ({
    name: result.name,
    img: result.img,
    alias: result.alias,
    description: result.description,
    id: result.id.toString()
  }));
    
  return mungedResults;
};

export const fetchSingleCharacter = async (id) => {
  const res = await fetch(`https://xmenapiheroku.herokuapp.com/api/characters/${id}`);
  const char = await res.json();
   
  return char;
    
};
