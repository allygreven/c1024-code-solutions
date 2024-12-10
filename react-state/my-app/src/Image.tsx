import './Image.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};

export function Image({ srcs }: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="width-50 ">
          <img
            onClick={() => setCount((count + 1) % srcs.length)}
            className="image-fill"
            src={srcs[count]}
            alt="space-image"
          />
        </div>
      </div>
    </>
  );
}
