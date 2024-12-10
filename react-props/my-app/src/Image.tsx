import './Image.css';

type ImageProps = {
  src: string;
};

export function Image({ src }: ImageProps) {
  return <img src={src} alt="space image" />;
}
