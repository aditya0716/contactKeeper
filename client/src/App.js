import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <>
      <ContactState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </>
  );
};

export default App;
