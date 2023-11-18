// import logo from './logo.svg';
import './App.css';
import Accelerator from './components/Accelerator/Accelerator';
import Desc from './components/Description/Desc';
import Feature from './components/Features/Feature';
import Futures from './components/Futures/Futures';
import Hero from './components/Hero/Hero';
import SignUp from './components/Signup/SignUp';

function App() {
  return (
    <div className="">
      <Hero />
      <Desc />
      <Feature />
      <Futures />
      <Accelerator />
      <SignUp />
    </div>
  );
}

export default App;
