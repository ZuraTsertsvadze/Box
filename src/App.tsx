import { useState, useRef, useCallback } from "react";

import "./index.css";
import Header from "./Header";
import PopUp from "./PopUp";

function App() {
  interface popupProperties {
    content: string;
    coords: { top: number; left: number };
    visible: boolean;
  }

  const [popupProperties, setPopupProperties] = useState<popupProperties>({
    content: "",
    coords: { top: 0, left: 0 },
    visible: false,
  });

  const headers: string[] = ["email", "Name", "Phone", "Contacts"];

  const handleHeaderClick = useCallback(
    (ref: React.RefObject<HTMLDivElement> | null, header: string) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();

        const { height, x } = rect;

        setPopupProperties((prev) => {
          return {
            content: `${header}`,
            coords: { top: height + 1, left: x },
            visible:
              prev.content === ref.current?.innerText ? !prev.visible : true,
          };
        });
      }
    },
    []
  );

  return (
    <div className="flex-col  items-center">
      <div className="flex justify-center mt-9 relative">
        <div className="flex flex-col">
          <div className="flex ">
            {headers.map((header, headerIndex) => {
              return (
                <Header
                  header={header}
                  key={headerIndex}
                  handleHeaderClick={handleHeaderClick}
                />
              );
            })}
          </div>
          {popupProperties.visible ? (
            <PopUp
              header={popupProperties.content}
              left={popupProperties.coords.left}
              top={popupProperties.coords.top}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
