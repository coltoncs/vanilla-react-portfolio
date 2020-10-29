import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Layout from './components/Layout';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  

  return (
    <div className='App'>
      <Nav />

      <Layout>

        <Switch>
          <Route path="/resume">
            <Resume />
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
    </div>
  );
}

export default App;
