import './App';

type Props = {
  pokedex: Pokemon[];
};

type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: Props) {
  return (
    <>
      <ul>
        {pokedex.map((pokemon) => (
          <li key={pokemon.number}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
