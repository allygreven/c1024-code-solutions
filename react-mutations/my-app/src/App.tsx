import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    const addPokemon: Pokemon = { number: '058', name: 'Evie' };
    setPokedex(pokedex.concat(addPokemon));
  }

  function handleUpdate(): void {
    setPokedex(
      pokedex.map((pokemon) =>
        pokemon.number === '058' ? { ...pokemon, name: 'Crabby' } : pokemon
      )
    );
  }

  function handleRemove(): void {
    setPokedex(pokedex.filter((pokemon) => pokemon.number !== '058'));
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
