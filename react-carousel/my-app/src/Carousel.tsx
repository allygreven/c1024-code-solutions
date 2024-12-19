import { Dots } from './Dots';
import { ImageCard } from './ImageCard';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Image } from './App';
import { useEffect, useState } from 'react';
import './Carousel.css';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(delay);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="container">
        <div className="carousel">
          <PrevButton
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
          />
          <div className="image">
            <ImageCard image={images[currentIndex]} />
          </div>
          <NextButton
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          />
        </div>
        <div className="bubble">
          <Dots
            onClick={setCurrentIndex}
            count={images.length}
            current={currentIndex}
          />
        </div>
      </div>
    </>
  );
}
