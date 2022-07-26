
import {Link} from 'react-router-dom'
import './App.css';
import "./style.css";

function App() {

  return (
    <div className="App">
      <h1>All You Need Shopping !!</h1>
      <Link to="/shop">
      <h2>Shop Now</h2>
      </Link>
    </div>
  );
}

export default App;
