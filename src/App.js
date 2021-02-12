import ApiCall from "./components/ApiCall";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <ApiCall />
    </div>
  );
}
