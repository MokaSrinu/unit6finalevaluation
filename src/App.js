import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { Login } from './components/login';
import { Moviedetails } from './components/moviedetails';
import { Moviebookings } from './components/moviebookings';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/movies/:id" element={<Moviedetails/>}></Route>
         <Route path="/bookings" element={<Moviebookings/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
