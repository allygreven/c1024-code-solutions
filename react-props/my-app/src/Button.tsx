type Button = {
  buttonText: string;
};

export function Button({ buttonText }: Button) {
  return <button>{buttonText}</button>;
}
