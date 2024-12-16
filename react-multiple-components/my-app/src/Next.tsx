type Props = {
  onClick: () => void;
};

export function Next({ onClick }: Props) {
  return (
    <>
      <button onClick={onClick} type="button" className="next">
        Next
      </button>
    </>
  );
}
