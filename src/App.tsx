import { useState } from "react";

import "./index.css";
import HeaderAndPopUp from "./HeaderAndPopUp";

function App() {
  const [index, setIndex] = useState<null|number >(null);


  const headers = ["email", "Name","Phone","Contacts"];
  return (
    <div className="flex-col  items-center">
      <div className="flex justify-center mt-9">
        <div className="flex">
          {headers.map((header, headerIndex) => {
            return (
              <HeaderAndPopUp
                text={header}
                key={headerIndex}
                index={index}
                setIndex={setIndex}
                headerIndex={headerIndex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
