import Navbar from "./components/Navbar";
import "./App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element = {<EmployeeList/>
          <EmployeeList />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
