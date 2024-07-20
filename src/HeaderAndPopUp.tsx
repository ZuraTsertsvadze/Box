import PopUp from "./PopUp";
import { useState, useRef } from "react";

function HeaderAndPopUp({
  text,
  index,
  setIndex,
  headerIndex,
}: {
  text: string;
  index: number | null;
  setIndex: React.Dispatch<React.SetStateAction<null | number>>;
  headerIndex: number;
}) {
  const [header, setHeader] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        className="border-2  border-black p-3"
        ref={ref}
        onClick={() => {
          {
            ref.current && setHeader(ref.current.innerText);
          }
          setIndex(headerIndex);
        }}
      >
        {text}
      </div>
      {index === headerIndex ? <PopUp header={header} /> : null}
    </div>
  );
}

export default HeaderAndPopUp;
