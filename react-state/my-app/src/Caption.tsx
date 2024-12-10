import { useState } from 'react';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3 onClick={() => setCount((count + 1) % captions.length)}>
        {captions[count]}
      </h3>
    </>
  );
}
