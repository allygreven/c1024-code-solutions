import { GoDotFill, GoDot } from 'react-icons/go';

type Props = {
  count: number;
  current: number;
  onClick: (n: number) => void;
};

export function Dots({ count, current, onClick }: Props) {
  const dot = [];
  for (let i = 0; i < count; i++) {
    if (i === current) {
      dot.push(<GoDotFill key={i} onClick={() => onClick(i)} />);
    } else {
      dot.push(<GoDot />);
    }
  }

  return <>{dot}</>;
}
