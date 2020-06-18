import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";

//Import components
import Start from "./components/Start";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Start} />
      <Route path="/About" exact component={About} />
      <Route path="/Work" exact component={Work} />
    </div>
  </Router>
  );
}

export default App;
