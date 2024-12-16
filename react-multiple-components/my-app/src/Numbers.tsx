type Props = {
  count: number;
  current: number;
  onClick: (n: number) => void;
};

export function Numbers({ count, current, onClick }: Props) {
  const numButton = [];
  for (let i = 0; i < count; i++) {
    numButton.push(
      <button
        key={i}
        onClick={() => onClick(i)}
        style={{ backgroundColor: i === current ? '#ffd9de' : 'white' }}>
        {i}
      </button>
    );
  }

  return <>{numButton}</>;
}
