import './Image.css';

type Props = {
  src: string;
};
export function Image({ src }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img src={src} alt="space-image" className="image-fill" />
      </div>
    </div>
  );
}
