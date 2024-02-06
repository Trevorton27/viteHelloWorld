//import logo from './logo.svg';
import './App.css';
import LevelOne from './LevelOne';

function App() {
  const helloWorld = 'Hello World';
  return (
    <div className='App'>
      <LevelOne helloWorld={helloWorld} />
    </div>
  );
}


export default App;
