import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
