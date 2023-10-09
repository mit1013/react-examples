import useArray from "./hooks/useArray";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UseRef from "./pages/UseRef";
import UseCallback from "./pages/UseCallback/UseCallback";
import UseContext from "./pages/UseContext";
import UseMemo from "./pages/UseMemo";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/Users/UserDetails";
import AdminUser from "./pages/Users/AdminUser";
import Pagination from "./pages/Pagination/PaginationExample";

function App() {
  const { array, push } = useArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
            <Route path="admin" element={<AdminUser />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{array.join(", ")}</div>

//         <button onClick={() => push(Math.floor(Math.random() * 100))}>
//           Push
//         </button>
//       </header>
//     </div>
//   );
// }

export default App;
