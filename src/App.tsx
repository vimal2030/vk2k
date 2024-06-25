// src/App.tsx
import './App.css';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Routes/Home/Home';
import About from './Layout/Routes/About/About';
import Contact from './Layout/Routes/Contact/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About about={[]} />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
