import './Image.css';

type Image = {
  src: string;
};

export function Image({ src }: Image) {
  return <img src={src} alt="space image" />;
}
