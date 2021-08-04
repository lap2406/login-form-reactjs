// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login /> 
          </Route>
          <Route path="/" render={()=>{
            return localStorage.getItem("login") ? <Home /> : <Redirect to="/login" />
          }}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
