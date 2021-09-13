import './App.css';
import Clock from './components/Clock';
import SetModal from './components/SetModal';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Stopwatch/>
    </div>
  );
}

export default App;
