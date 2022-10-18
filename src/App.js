import './App.css';
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Weather Search Engine</h1>
        <Search />
        <p><a
          className="App-link"
          href="https://github.com/yana-zakharchenko/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced 
        </a> by Yana Zakharchenko</p>
      </header>
    </div>
  );
}

export default App;
