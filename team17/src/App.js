import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card first_name="Anand" last_name="Joshi" residency_name="Swinging Residency" residency_year="2024" email="anandjoshi@gmail.com" portfolio_link="anandjoshi.com" instagram_url="https://www.instagram.com" location="Atlanta" medium="Pottery"></Card>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
