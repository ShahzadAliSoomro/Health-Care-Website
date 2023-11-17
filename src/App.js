// import logo from './logo.svg';
import './App.css';
import Accelerator from './components/Accelerator/Accelerator';
import Desc from './components/Description/Desc';
import Feature from './components/Features/Feature';
import Futures from './components/Futures/Futures';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="">
      <Hero />
      <Desc />
      <Feature />
      <Futures />
      <Accelerator />
    </div>
  );
}

export default App;
