import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home';

function App() {
  return (
    <BrowserRouter basename='/bavi-portfolio'>
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
