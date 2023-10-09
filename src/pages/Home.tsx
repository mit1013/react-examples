import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home</h2>

      <div className="container">
        <h3>React router dom</h3>
        <p>Dynamic and nested routes example</p>
        <Link to="/users">Users</Link>
      </div>

      <div className="container">
        <h3>useRef</h3>
        <Link to="/useref">useRef examples</Link>
      </div>

      <div className="container">
        <h3>useCallback</h3>
        <Link to="/usecallback">useCallback examples</Link>
      </div>

      <div className="container">
        <h3>useMemo</h3>
        <Link to="/usememo">useMemo examples</Link>
      </div>

      <div className="container">
        <h3>useContext</h3>
        <Link to="/usecontext">useContext examples</Link>
      </div>

      <div className="container">
        <h3>pagination</h3>
        <Link to="/pagination">pagination example</Link>
      </div>
    </>
  );
};

export default Home;
