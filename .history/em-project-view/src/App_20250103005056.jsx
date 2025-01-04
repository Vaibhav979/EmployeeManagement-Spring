import Navbar from "./components/Navbar";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import {}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
