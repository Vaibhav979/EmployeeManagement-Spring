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
          <Route path/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
