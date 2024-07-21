import { useState, useRef, Dispatch, SetStateAction } from "react";

import "./index.css";
import Header from "./Header";
import PopUp from "./PopUp";

function App() {
  const [header, setHeader]: [
    SetStateAction<string | null>,
    Dispatch<SetStateAction<string | null>>
  ] = useState<string | null>(null);
  const [vision, setVision]: [
    SetStateAction<boolean>,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [index, setIndex]: [
    SetStateAction<number | null>,
    Dispatch<SetStateAction<number | null>>
  ] = useState<React.SetStateAction<null | number>>(null);

  const headers = ["email", "Name", "Phone", "Contacts"];

  const ref = useRef<(HTMLDivElement | undefined)[]>([]);

  const left: number | undefined =
    typeof index === "number" ? ref.current[index]?.offsetLeft : undefined;
  const top: number | undefined =
    typeof index === "number" ? ref.current[index]?.offsetHeight : undefined;

  return (
    <div className="flex-col  items-center">
      <div className="flex justify-center mt-9 relative">
        <div className="flex flex-col">
          <div className="flex ">
            {headers.map((header, headerIndex) => {
              return (
                <Header
                  setVision={setVision}
                  index={index}
                  setIndex={setIndex}
                  text={header}
                  key={headerIndex}
                  setHeader={setHeader}
                  headerIndex={headerIndex}
                  addref={(refElement: HTMLDivElement | undefined | null) => {
                    if (refElement) ref.current[headerIndex] = refElement;
                  }}
                />
              );
            })}
          </div>
          <PopUp header={header} left={left} vision={vision} top={top} />
        </div>
      </div>
    </div>
  );
}

export default App;
