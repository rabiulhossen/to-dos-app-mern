import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calender from "./pages/Calender/Calender";
import Menu from "./pages/Menu";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import ToDo from "./pages/ToDo";
import CompletedTask from "./pages/CompletedTask";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/completed" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
