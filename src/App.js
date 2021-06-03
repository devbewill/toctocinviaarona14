import "./App.scss";
import RulerSVG from "./ruler.svg";
import { ReactComponent as BabySVG } from "./baby.svg";
import CountBabyAge from "./CountBabyAge";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="container">
      <div className="circle"></div>
      <BabySVG className="baby" />
      <div className="ruler">
        <p>dimensioni attuali </p>
        <img src={RulerSVG} alt="ruler" />
      </div>

      <CountBabyAge />
      <CountdownTimer />
    </div>
  );
}

export default App;
