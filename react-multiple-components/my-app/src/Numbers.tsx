type Props = {
  count: number;
};

export function Numbers({ count }: Props) {
  const numButton = [];
  for (let i = 0; i < count; i++) {
    numButton.push(<button>{i}</button>);
  }

  return <>{numButton}</>;
}
