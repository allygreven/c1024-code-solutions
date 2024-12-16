type Props = {
  quotes: string[];
};

export function ItemsList({ quotes }: Props) {
  if (quotes.length === 0) {
    return 'No items match the filter';
  }

  return (
    <div>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}
