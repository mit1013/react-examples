import { useState } from "react";

const useArray = (defaultValue: any) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element: any) => {
    console.log("L7 element === ", element);
    setArray((a: any) => [...a, element]);
  };

  return { array, push };
};

export default useArray;
