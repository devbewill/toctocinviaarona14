import RulerSVG from "./assets/ruler.svg";
import { ReactComponent as BabySVG } from "./assets/baby.svg";
import CountBabyAge from "./components/CountBabyAge";
import CountdownTimer from "./components/CountdownTimer";
import Born from "./components/Born";

function App() {
  return (
    <>
      <div className="logo">toctocinviaarona14</div>
      <div className="container">
        <div className="circle"></div>
        <BabySVG className="baby  " />
        <div className="ruler">
          {/* <p>3,1 kg </p> */}
          {/* <img src={RulerSVG} alt="ruler" /> */}
        </div>
        <Born></Born>

        {/* <CountBabyAge />
        <CountdownTimer /> */}
      </div>
    </>
  );
}

export default App;
