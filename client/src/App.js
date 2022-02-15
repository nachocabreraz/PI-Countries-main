import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/Home'
import Create from './components/Create/Create'
import LandingPage from './components/LandingPage/LandingPage'
import Detail from './components/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home}/>
        <Route path='/create' component={Create}/>
        <Route exact path='/country/:id' component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
