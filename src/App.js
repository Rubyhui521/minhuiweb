import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Resume from './components/Resume';
import Code from './components/Code';
import Design from './components/Design';
import Motion from './components/Motion';
import Contact from './components/Contact';

function App() {
  return (
    <Router hashType="slash">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/code" element={<Code />} />
        <Route path="/design" element={<Design />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
