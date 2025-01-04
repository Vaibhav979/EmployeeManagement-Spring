import Navbar from "./components/Navbar";
import "./App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>es>
        <EmployeeList />
      </BrowserRouter>
    </>
  );
}

export default App;
