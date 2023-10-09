import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    renderCount.current++;
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>Case 1: Reference a dom element:</p>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
      <p>Rendered {renderCount.current} times</p>
    </>
  );
};

export default UseRef;
