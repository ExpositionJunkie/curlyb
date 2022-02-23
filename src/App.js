import logo from "./logo.svg";
import "./App.css";
//import i18n from "./i18n"; //language functionality
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>Curly brackets incoming.</p>
        <p>Please stay tuned while this website is built!</p>
      </header>
    </div>
  );
}

export default App;
