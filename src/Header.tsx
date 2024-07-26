import React, { useRef } from "react";

function Header({
  header,

  handleHeaderClick,
}: {
  header: string;

  handleHeaderClick: (
    ref: React.RefObject<HTMLDivElement> | null,
    header: string
  ) => void;
}) {
  const ref = useRef(null);

  return (
    <div>
      <div
        className="border-2  border-black p-3"
        ref={ref}
        onClick={() => {
          handleHeaderClick(ref, header);
        }}
      >
        {header}
      </div>
    </div>
  );
}

export default Header;
