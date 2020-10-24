import { useState } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='App'>
      <Nav className={toggle ? 'active' : ''}>
        <ul>
          <li><Link to="/" onClick={() => setToggle(!toggle)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setToggle(!toggle)}>About</Link></li>
          <li><Link to="/portfolio" onClick={() => setToggle(!toggle)}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setToggle(!toggle)}>Contact</Link></li>
        </ul>
      </Nav>


      <Layout>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </Layout>
      <button className={toggle ? "nav-toggle active" : "nav-toggle"} onClick={() => setToggle(!toggle)}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </div>
  );
}

export default App;
