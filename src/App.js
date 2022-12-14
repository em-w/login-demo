
import './App.css';
import {Login} from './Login.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Dashboard} from './dashboard.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
