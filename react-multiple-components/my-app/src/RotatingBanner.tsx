import './RotatingBanner.css';
import { Header } from './Header';
import { Previous } from './Previous';
import { Numbers } from './Numbers';
import { Next } from './Next';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Header item={items[2]} />
      <Previous />
      <Numbers count={items.length} />
      <Next />
    </>
  );
}
