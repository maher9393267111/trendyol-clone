import logo from './logo.svg';
import './App.css';


import Home from './pages/home/index.js';
import Topnavbar from './components/topnavbar';

function App() {
  return (
    <div className="App">
    
{/* ------navbar- */}

<div>
  <Topnavbar/>
</div>

<div>
  <Home/>
</div>



    </div>
  );
}

export default App;
