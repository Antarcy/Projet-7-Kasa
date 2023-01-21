import './style/App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Destination from './Pages/Destination';
import Footer from "./Components/Footer";
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
		<div className="App">
			<main>
				<Header />
				<Routes>
        
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<Destination />} />
          <Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;