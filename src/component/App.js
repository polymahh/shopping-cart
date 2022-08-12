
import {Link} from 'react-router-dom'
import './App.css';
import "./style.css";

function App() {

  return (
    <div className="App">
    
      <div className='welcome'>
        <h1>BEST TIMES!</h1>
        <h1>FOR EVERY NEW!</h1>
        <h1>MOOM!</h1>

      <Link to="/shop">
      <h2 className='now'>Shop Now</h2>
      </Link>
      </div>

      <div className='kid'>
        <img src={require('./assets/valeria-zoncoll-AVGc87j_vNA-unsplash.jpg')} alt='kid'/>
      </div>
      
    </div>
  );
}

export default App;
