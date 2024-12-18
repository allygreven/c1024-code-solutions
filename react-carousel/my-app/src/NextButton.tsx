import { FaAngleRight } from 'react-icons/fa6';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return <FaAngleRight onClick={onClick} style={{ cursor: 'pointer' }} />;
}
