import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Certificate from './Pages/Certificate/Certificate';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Certificate/>}/>
    </Routes>
  </Router>
  );
}

export default App;
