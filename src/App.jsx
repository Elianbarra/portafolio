import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contact.jsx";
import Pacman from './components/pacman.jsx'; 
import Avion1942 from './components/avion.jsx'; // Asegúrate de reemplazar esto con la ruta correcta a tu componente
import Calculadora from "./components/Calculadora.jsx";
import Login from "./components/Login.jsx";
import Gift from "./components/Gift.jsx";
import Colors from "./components/Colors.jsx";
import HomePage from "./components/HomePage.jsx";
import Register from "./components/register.jsx";

const App = () => {
  return (
    <Router basename="/portafolio">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/works" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/pacman" element={<Pacman />} />
        <Route path="/avion" element={<Avion1942 />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </Router>

  );
};

export default App;
