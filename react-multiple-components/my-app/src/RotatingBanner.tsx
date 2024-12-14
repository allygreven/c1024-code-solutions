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
      <div className="rotating-banner">
        <Header item={items[currentIndex]} />
        <Previous />
        <Numbers count={items.length} currentIndex={currentIndex} />
        <Next />
      </div>
    </>
  );
}
