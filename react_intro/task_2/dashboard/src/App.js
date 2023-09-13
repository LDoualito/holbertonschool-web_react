import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access to the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name='email'/>
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' name='password'/>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
