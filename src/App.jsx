import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Tips from './pages/tips/Tips.jsx';
import Alerts from './pages/alerts/Alerts.jsx';
// import './App.css'


import './components/formulario/AlertaIncendiosForm.css';
import './App.css'

const App = () => {
  return (

    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  </>
  )
}


export default App;
