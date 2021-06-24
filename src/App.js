import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Story from './components/Story';
import Highlight from './components/Highlight';
import Social from './components/Social';
function App() {
  return (
    <BrowserRouter>
    <div>
    
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route  path="/story" component={Story}/>
        <Route  path="/highlight" component={Highlight}/>
        <Route  path="/social" component={Social}/>
      </Switch>
     
        
     </div>
</BrowserRouter>
  );
}

export default App;
