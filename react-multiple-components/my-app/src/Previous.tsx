type Props = {
  onClick: () => void;
};

export function Previous({ onClick }: Props) {
  return (
    <>
      <button onClick={onClick} type="button" className="previous">
        Previous
      </button>
    </>
  );
}
