type Caption = {
  text: string;
};

export function Caption({ text }: Caption) {
  return <h3>{text}</h3>;
}
