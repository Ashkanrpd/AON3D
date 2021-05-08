import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header.js";
import Slider from "./components/slider.js";
import Cards from "./components/cards.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
