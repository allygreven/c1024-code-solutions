// import { GoDotFill } from 'react-icons/go';
// <GoDotFill />
import { GoDot } from 'react-icons/go';

type Props = {
  count: number;
  current: number;
  onClick: (n: number) => void;
};

export function Dots({ count, current, onClick }: Props) {
  const dot = [];
  for (let i = 0; i < count; i++) {
    dot.push(<GoDot key={i} onClick={() => onClick(i)} />);
  }

  return <>{dot}</>;
}
