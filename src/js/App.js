import '../css/App.css';
import BmiCalculator from './BmiCalculator';
import MeasurementTape from './MeasurementTape'; 
import DisableZoom from './Zoom';

function App() {
  return (
      <div className="App">
        <DisableZoom />
        <MeasurementTape className="top" />
        <BmiCalculator />
        <MeasurementTape className="bottom" />
      </div>
  );
}

export default App;
