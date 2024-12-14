import './RotatingBanner.css';
import { Header } from './Header';
import { Previous } from './Previous';
import { Numbers } from './Numbers';
import { Next } from './Next';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header item={items[currentIndex]} />
      <div className="center-prev">
        <Previous
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + items.length) % items.length)
          }
        />
      </div>
      <Numbers
        onClick={setCurrentIndex}
        count={items.length}
        current={currentIndex}
      />
      <div className="center-next">
        <Next
          onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
        />
      </div>
    </>
  );
}
