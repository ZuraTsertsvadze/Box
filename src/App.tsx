import { useState, useRef} from "react";

import "./index.css";
import Header from "./Header";
import PopUp from "./PopUp";

function App() {
interface DataObject {
    header: string;
    index: number;
    vision: boolean;
  }

  const [dataObject, setDataObject] = useState<DataObject>({
    header: "",
    index: 0,
    vision: false,
  });

  const headers = ["email", "Name", "Phone", "Contacts"];

  const ref = useRef<(HTMLDivElement | undefined)[]>([]);

  const left: number | undefined = ref.current[dataObject.index]?.offsetLeft;
  const top: number | undefined = ref.current[dataObject.index]?.offsetHeight;

  return (
    <div className="flex-col  items-center">
      <div className="flex justify-center mt-9 relative">
        <div className="flex flex-col">
          <div className="flex ">
            {headers.map((header, headerIndex) => {
              return (
                <Header
                  setDataObject={setDataObject}
                  dataObject={dataObject}
                  index={dataObject.index}
                  text={header}
                  key={headerIndex}
                  headerIndex={headerIndex}
                  addref={(refElement: HTMLDivElement | undefined | null) => {
                    if (refElement) ref.current[headerIndex] = refElement;
                  }}
                />
              );
            })}
          </div>
          <PopUp
            header={dataObject.header}
            left={left}
            vision={dataObject.vision}
            top={top}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
