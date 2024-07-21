import { SetStateAction, Dispatch } from "react";

type AddRefFunction = (refElement: HTMLDivElement | null|undefined) => void;

function Header({
  setVision,
  index,
  setIndex,
  text,
  setHeader,
  headerIndex,
  addref,
}: {
  setVision: Dispatch<SetStateAction<boolean>>;
  index: SetStateAction<number | null>;
  setIndex: Dispatch<SetStateAction<number | null>>;
  text:string;
  setHeader: Dispatch<SetStateAction<null | string>>;
  headerIndex: number;
 addref:AddRefFunction
}) {
  return (
    <div>
      <div
        className="border-2  border-black p-3"
        ref={addref}
        onClick={() => {
          setHeader(text);
          console.log(index, "hed");
          setIndex(headerIndex);
          {
            headerIndex === index
              ? setVision((prev: boolean) => !prev)
              : setVision(true);
          }
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Header;
