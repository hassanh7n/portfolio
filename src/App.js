
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Banner from './pages/Banner/Banner';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import ContactMe from './pages/ContactMe/ContactMe';
import Footer from './pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Services />
      {/* <Portfolio /> */}
      <ContactMe />
      <Footer />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
