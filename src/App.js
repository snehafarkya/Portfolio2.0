// import logo from './logo.svg';
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Work from './component/Work';

function App() {
  return (

    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
