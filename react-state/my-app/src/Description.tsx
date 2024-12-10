import { useState } from 'react';

type Props = {
  text: string[];
};
export function Description({ text }: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p onClick={() => setCount((count + 1) % text.length)}>{text[count]}</p>
    </>
  );
}
