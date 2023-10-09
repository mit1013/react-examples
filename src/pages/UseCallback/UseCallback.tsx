import { useState, useCallback } from "react";
import List from "./components/List";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  /* mock api call */
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <p>
        useCallback - to preserve the function reference
        <br />
        will not recreate the function unless the dependencies change
        <br />
        could also be used for performance optimisation if function slow to
        create
        <br />
        if useCallback not used here, getItems would be recreated every time the
        theme is toggled
      </p>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};

export default UseCallback;
