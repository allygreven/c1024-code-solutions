type Props = {
  item: string;
};

export function Header({ item }: Props) {
  return <div className="header">{item}</div>;
}
