import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
function App() {
  return (
     <>
     
       <Navbar />
       <div className="container">
         <About/>
       {/* <Textarea heading="Enter Text" /> */}
       </div>
       </>
  );
}

export default App;
