import './style/App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Destination from './Pages/Destination';
import Footer from "./Components/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/id" element={<Destination />} />
        </Routes>
        <Footer />
      </div>
  );
}
export default App;