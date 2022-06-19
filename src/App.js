import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<h1>verify here</h1>}/>
      <Route path='/:id' element={<h1>certi here</h1>}/>
    </Routes>
  </Router>
  );
}

export default App;
