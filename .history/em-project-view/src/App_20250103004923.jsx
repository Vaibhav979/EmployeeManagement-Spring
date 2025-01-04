import Navbar from "./components/Navbar";
import "./App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<EmployeeList />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
