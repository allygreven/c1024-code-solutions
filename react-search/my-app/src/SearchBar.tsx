type Props = {
  quote: string;
  onChange: (text: string) => void;
};

export function SearchBar({ quote, onChange }: Props) {
  return (
    <>
      <input
        onChange={(event) => {
          onChange(event.target.value);
        }}
        type="search"
        placeholder="Search"
        value={quote}
        className="search"
      />
    </>
  );
}
