import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';  


// Switch is deprecated in react 18 please use "Routes" from now on
function App() {
  return (
   <>
    <Routes>
      <Route path = "/" element = {<Layout />} />
    </Routes>
   </>
  );
}

export default App;
