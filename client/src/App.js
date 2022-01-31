import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/Home'
import { SearchBar } from './components/SearchBar/SearchBar'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home}/>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
