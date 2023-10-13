import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

    <Navbar title="Text Utils" abouttext="About Us"/>
    <div className='container'>
      <TextForm heading="Enter text to analyze"/>
    </div>

    </>
  );
}

export default App;
