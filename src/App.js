import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import ByRelease from './components/ByRelease';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/byrelease" element={<ByRelease />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
