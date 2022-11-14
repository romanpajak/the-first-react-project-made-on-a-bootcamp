import './App.css';
import Navbar from './components/Navbar';
import Baner from './components/Baner';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Baner />
    <SecondSection idName={"about"}/>
    <ThirdSection />
    <Footer />
    </>
  );
}

export default App;
