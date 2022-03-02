import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import Closting from './components/Wrapper/Closting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/closting" element={<Closting />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
