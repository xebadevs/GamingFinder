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
        <Route path="/mmo" element={<ByRelease />}></Route>
        <Route path="/mmorpg" element={<ByRelease />}></Route>
        <Route path="/shooter" element={<ByRelease />}></Route>
        <Route path="/strategy" element={<ByRelease />}></Route>
        <Route path="/moba" element={<ByRelease />}></Route>
        <Route path="/card_games" element={<ByRelease />}></Route>
        <Route path="/racing" element={<ByRelease />}></Route>
        <Route path="/sports" element={<ByRelease />}></Route>
        <Route path="/social" element={<ByRelease />}></Route>
        <Route path="/fighting" element={<ByRelease />}></Route>
        <Route path="/pc" element={<ByRelease />}></Route>
        <Route path="/web_browser" element={<ByRelease />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
