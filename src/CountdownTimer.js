import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const getCountdown = () => {
    const timeRemaining = new Date(`2021-12-18`) - new Date();

    let countdown = {};

    if (timeRemaining > 0) {
      countdown = {
        Settimane: Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7)),
        Giorni: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds: Math.floor((timeRemaining / 1000) % 60),
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

  return (
    <>
      <div className="container">
        {Object.entries(countdown).map(([unit, value]) => {
          return (
            <div key={Math.random().toString(16)} className="counter">
              <span className="count">{value}</span>
              <span className="unit">{unit}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountdownTimer;
