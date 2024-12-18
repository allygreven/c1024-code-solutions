import { Image } from './App';

type Props = {
  image: Image;
};

export function ImageCard({ image }: Props) {
  return (
    <img
      className="current-image"
      src={image.src}
      alt={image.alt}
      // style={{ width: '400px' }}
    />
  );
}
