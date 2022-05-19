import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';  
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import Projects from './components/Projects'; 

// Switch is deprecated in react 18 please use "Routes" from now on
function App() {
  return (
   <>
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
