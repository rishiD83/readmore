import logo from "./logo.svg";
import "./App.css";
import Content from "./components/ReadMore";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Content />
    </div>
  );
}

export default App;
