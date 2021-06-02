import './App.scss';
import CountBabyAge from "./CountBabyAge";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="countdown">
      <CountdownTimer />
      <CountBabyAge></CountBabyAge>
    </div>
  );
}

export default App;
