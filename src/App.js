import './App.css';
import LabelTemporizador from './components/LabelTemporizador';
import ContagemRegressiva from './components/ContagemRegressiva';
function App() {
  return (
    <div className="App">
      <LabelTemporizador name="Temporizador"/>
      <ContagemRegressiva/>
    </div>
  );
}

export default App;
