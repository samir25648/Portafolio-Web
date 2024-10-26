import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contactame from "./pages/Contactame";
import Habilidades from "./pages/Habilidades";
import Proyectos from "./pages/Proyectos";
import SobreMi from "./pages/SobreMi";

function App() {
  return (
    <div className='bg-gray-700 min-h-screen'>
      <NavBar />

      <main className="container mx-auto"> 
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Contactame />
      </main>

      <Footer />
    </div>
  );
}

export default App;
