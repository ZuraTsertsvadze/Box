function PopUp({
  top,
  header,
  left,
}: {
  header: string | null;
  left: number | undefined;

  top: number | undefined;
}) {
  return (
    <div
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      className={`border-2  border-black p-3 w-fit absolute  z-1 `}
    >
      {header}
    </div>
  );
}

export default PopUp;
