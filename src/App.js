import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Calender from './pages/Calender/Calender';

function App() {
  return (
    <div className="App">
 <Routes>
<Route path='/calender' element={<Calender></Calender>}></Route>




 </Routes>
    </div>
  );
}

export default App;
