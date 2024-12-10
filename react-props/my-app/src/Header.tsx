type Header = {
  title: string;
};

export function Header({ title }: Header) {
  return <h1>{title}</h1>;
}
