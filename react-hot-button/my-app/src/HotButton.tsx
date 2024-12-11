import './HotButton.css';
import './App.tsx';
import { useState } from 'react';

type Props = {
  label: string;
};

const message = 'Number of Clicks: ';

export function HotButton({ label }: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count + 1) % 3)}>{label[count]}</button>
      <p>{message[count]}</p>
    </>
  );
}
