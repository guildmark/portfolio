import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import axios from "axios";

//Import components
import Start from "./components/Start";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {

  const [data, setData] = useState(null);


  useEffect(() => {
    callBackend()
    .then(res => setData((res)))
    .catch(err => console.log(err));
    
  }, []);

  //Make GET request to backend
  const callBackend = async () => {
    
    await axios.get("http://localhost:5000/express_backend")
    .then(res => setData(res.data));
    
  }

  return (
    <Router>
    <div>
      <Route path="/" exact component={Start} />
      <Route path="/About" exact component={About} />
      <Route path="/Work" exact component={Work} />
      <Route path="/Contact" exact component={Contact}/>

    </div>
  </Router>
  );
}

export default App;
