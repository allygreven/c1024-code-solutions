type Props = {
  count: number;
  currentIndex: number;
};

export function Numbers({ count, currentIndex }: Props) {
  const numButton = [];
  for (let i = 0; i < count; i++) {
    numButton.push(
      <button
        style={{ backgroundColor: i === currentIndex ? 'lightpink' : 'white' }}>
        {i}
      </button>
    );
  }

  return <>{numButton}</>;
}
