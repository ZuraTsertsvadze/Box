import { SetStateAction, Dispatch } from "react";
type AddRefFunction = (refElement: HTMLDivElement | null | undefined) => void;

function Header({
  setDataObject,
  dataObject,
  index,
  text,
  headerIndex,
  addref,
}: {
  setDataObject: Dispatch<
    SetStateAction<{
      header: string;
      index: number;
      vision: boolean;
    }>
  >;
  dataObject: {
    header: string;
    index: number;
    vision:boolean;
  };
  index: SetStateAction<number | null>;

  text: string;

  headerIndex: number;
  addref: AddRefFunction;
}) {
  return (
    <div>
      <div
        className="border-2  border-black p-3"
        ref={addref}
        onClick={() => {
          const data: {
            header: string;
            index: number;
            vision: false|boolean;
          } = { header: text, index: headerIndex, vision: false };
          setDataObject(data);

          {
            headerIndex === index
              ? setDataObject({ ...data, vision: !dataObject.vision })
              : setDataObject({ ...data, vision: true });
          }
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Header;
