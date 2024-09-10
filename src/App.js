import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Add from './screens/Add';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
