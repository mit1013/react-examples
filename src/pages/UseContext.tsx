import { useTheme } from "../contexts/ThemeContext";

const UseContext = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div>UseContext</div>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

export default UseContext;
