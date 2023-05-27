import { BrowserRouter } from 'react-router-dom';
import Rotas from '../routes/Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
