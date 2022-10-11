import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<div>page home</div>} />
          <Route path="my-trips" element={<div>page my trips</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
