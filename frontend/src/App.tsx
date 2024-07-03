import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Project from './pages/Projekt/Projekt';
import { NavColorProvider } from './components/context';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <NavColorProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:index" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </NavColorProvider>
  );
}

export default App;