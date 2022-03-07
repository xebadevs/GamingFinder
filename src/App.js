import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import ByRelease from './components/pages/ByRelease';
import MMO from './components/pages/MMO';
import MMORPG from './components/pages/MMORPG';
import Shooter from './components/pages/Shooter';
import Strategy from './components/pages/Strategy';
import Moba from './components/pages/Moba';
import CardGames from './components/pages/CardGames';
import Racing from './components/pages/Racing';
import Sports from './components/pages/Sports';
import Social from './components/pages/Social';
import Fighting from './components/pages/Fighting';
import PC from './components/pages/PC';
import WebBrowser from './components/pages/WebBrowser';
import ShowGame from './components/pages/ShowGame';
import Error from './components/pages/Error';
import Search from './components/pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/by_release" element={<ByRelease />}></Route>
        <Route path="/mmo" element={<MMO />}></Route>
        <Route path="/mmorpg" element={<MMORPG />}></Route>
        <Route path="/shooter" element={<Shooter />}></Route>
        <Route path="/strategy" element={<Strategy />}></Route>
        <Route path="/moba" element={<Moba />}></Route>
        <Route path="/card_games" element={<CardGames />}></Route>
        <Route path="/racing" element={<Racing />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/social" element={<Social />}></Route>
        <Route path="/fighting" element={<Fighting />}></Route>
        <Route path="/pc" element={<PC />}></Route>
        <Route path="/web_browser" element={<WebBrowser />}></Route>
        <Route path="/game/:id" element={<ShowGame />}></Route>
        <Route path="/search/:game" element={<Search />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
