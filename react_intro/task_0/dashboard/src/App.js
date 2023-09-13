import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access to the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
