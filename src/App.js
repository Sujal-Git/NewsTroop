import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
   <>
    <div className="nav">
      <li><Link className='links' to="/">Home</Link></li>
      <li><Link className='links' to="/trending">Trending</Link></li>
      <li><Link className='links' to="/about">About</Link></li>
      <li><Link className='links' to="/contact">Contact</Link></li>
    </div>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/trending' element={<center><h1>Trending</h1></center>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<center><h1>Contact</h1></center>} />
      </Routes>
   </>
  );
}

export default App;
