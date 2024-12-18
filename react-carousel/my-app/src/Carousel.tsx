import { Dots } from './Dots';
import { ImageCard } from './ImageCard';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Image } from './App';
import { useState } from 'react';
import './Carousel.css';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <PrevButton
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      />
      <ImageCard image={images[currentIndex]} />
      <NextButton
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      />
      <div>
        <Dots
          onClick={setCurrentIndex}
          count={images.length}
          current={currentIndex}
        />
      </div>
    </>
  );
}
