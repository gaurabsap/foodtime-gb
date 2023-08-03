import "./App.css";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Pocket from "./pages/Pocket";
import Start from "./pages/Start";
import Testo from "./pages/Testo";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Home />
        <div className="bg-white">
          <Explore />
          <About />
          <Start />
          <Testo />
        </div>
        <Pocket />
        <Footer />
      </div>
    </>
  );
}

export default App;
