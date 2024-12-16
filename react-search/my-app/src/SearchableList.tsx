import './SearchableList.css';
import { SearchBar } from './SearchBar';
import { ItemsList } from './ItemsList';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');

  const filteredQuotes = quotes.filter((quote) => {
    return quote.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <>
      <SearchBar onChange={(text) => setInput(text)} quote={input} />
      <ul>
        <ItemsList quotes={filteredQuotes} />
      </ul>
    </>
  );
}
