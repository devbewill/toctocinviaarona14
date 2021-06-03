import "./App.scss";
import RulerSVG from "./ruler.svg";
import CountBabyAge from "./CountBabyAge";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="container">
      <div className="circle"></div>
      <div className="ruler">
        <p>baby size</p>
        <img src={RulerSVG} alt="ruler" />
      </div>

      <CountBabyAge />
      <CountdownTimer />
    </div>
  );
}

export default App;
