import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './components/layout'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/signup"  component={Signup} />
            <Route path="/"  component={Login} />
          </Switch>
        </Layout>
    </Router>
    </div>
  );
}

export default App;
