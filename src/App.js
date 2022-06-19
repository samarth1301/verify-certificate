import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home/Home';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<h1>certi here</h1>}/>
    </Routes>
  </Router>
  );
}

export default App;
