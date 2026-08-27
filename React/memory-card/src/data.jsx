import { useEffect } from 'react';

const smallPokemon = [
  'ditto',
  'pikachu',
  'smoliv',
  'squirtle',
  'joltik',
  'cutiefly',
  'togepi',
  'eevee',
  'pichu',
  'azurill',
  'diglett',
  'natu',
  'mew',
  'caterpie',
  'weedle',
  'oddish',
  'applin',
  'skitty',
  'rowlet',
  'mudkip'
];

export default async function loadData() {
  function shuffleCards(count) {
    const shuffled = [...smallPokemon].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomizeList = shuffleCards(4);
  const pokemonDataList = [];
  for (let item of randomizeList) {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' + item
    );
    const data = await response.json();
    const imgUrl = await data.sprites.front_default;
    pokemonDataList.push({ name: item, img: imgUrl });
  }
  return pokemonDataList;
}
