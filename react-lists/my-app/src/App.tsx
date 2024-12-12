import './App.css';
import { PokemonList } from './PokemonList';

export const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export default function App() {
  return (
    <>
      <PokemonList pokedex={pokedex} />
    </>
  );
}
