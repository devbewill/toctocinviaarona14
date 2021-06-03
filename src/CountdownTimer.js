import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const getCountdown = () => {
    const timeRemaining = new Date(`2021-12-18`) - new Date();

    let countdown = {};

    if (timeRemaining > 0) {
      countdown = {
        settimane: Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7)),
        giorni: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        // Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        // Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };

  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 5000);
  });

  //previsto il 18/12
  //lastCiclo il 13/03
  // trim1 13-03 - 11-06
  // trim2 12-06 - 17-09
  // trim3 18-09 - 18-12

  return (
    <>
      <div className="countdown">
        <p>
          ...ne mancano <br />
          ancora
        </p>
        <span className="counter">{countdown.settimane} </span>
      </div>
      <p className="days">
        * ad essere precisi, al 18/12/2021 mancano ancora
        <span>{countdown.giorni}</span>giorni
      </p>
    </>
  );
};

export default CountdownTimer;
