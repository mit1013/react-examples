import { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num: number) => {
    console.log("Calling slow function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // use case 2 - referential equality - used in conjunction with useEffect when dependency is an object
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#FFF" : "#333",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);

  return (
    <>
      <p>
        useMemo - case1: for performance optimisation
        <br />
        returns the value of the function and will not recreate the function
        unless the dependency changes
        <br />
        case 2: referential equality
        <br />
        see console log - used to memoise object when used as a useEffect
        dependency
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
        <div>{doubleNumber}</div>
      </div>
    </>
  );
};

export default UseMemo;
