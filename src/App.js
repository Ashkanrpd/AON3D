import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Home from "./view/home.js";
import Gallery from "./view/gallery.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/gallery" render={() => <Gallery />} />
        <Route exact path="*" render={() => <Redirect to="/home" />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
