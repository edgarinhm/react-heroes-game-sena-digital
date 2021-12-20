import reactTriforce from './presentation/assets/images/login/react-triforce.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Taller Practico: React (nivel básico)</h1>
        <img src={reactTriforce} className="App-topic" alt="reactTriforce" />        
        <p>
          Objetivo:  Desarrollar un juego con sus respectivo protagonista, niveles e items. Los estudiantes podrán decidir que nivel hacer. Se explicara en que consiste cada jefe, los items que suelta al ser derrotado. También se les facilitara las instrucciones para el motor y el sistema de cofres.
        </p>
      </header>
    </div>
  );
}

export default App;
