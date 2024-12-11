import './HotButton.css';
import './App.tsx';
import { useState } from 'react';

type Props = {
  label: string;
};

const message = 'Number of Clicks: ';

export function HotButton({ label }: Props) {
  const [count, setCount] = useState(0);

  let className = 'hot-button ';
  if (count < 3) {
    className = 'hot-button cold';
  } else if (count < 6) {
    className = 'hot-button cool';
  } else if (count < 9) {
    className = 'hot-button tepid';
  } else if (count < 12) {
    className = 'hot-button warm';
  } else if (count < 15) {
    className = 'hot-button hot';
  } else {
    className = 'hot-button nuclear';
  }

  return (
    <>
      <button className={className} onClick={() => setCount(count + 1)}>
        {label}
      </button>
      <p>
        {message} {count}
      </p>
    </>
  );
}
