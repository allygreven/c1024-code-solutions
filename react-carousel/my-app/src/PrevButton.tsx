import { FaAngleLeft } from 'react-icons/fa6';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return <FaAngleLeft onClick={onClick} style={{ cursor: 'pointer' }} />;
}
