import React, { useState, useEffect } from "react";

const CountBabyAge = () => {

  const getBabyAge = () => {
    const timePast = new Date() - new Date(`2021-03-13`);

    let babyAge = {};

    babyAge = {
      Settimane: Math.ceil(timePast /(1000 * 60 * 60 * 24 * 7)),
      Giorni: (Math.floor(timePast / (1000 * 60 * 60 * 24))),
      Hours: Math.floor((timePast / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((timePast / 1000 / 60) % 60),
      Seconds: Math.floor((timePast / 1000) % 60),
    };

    return babyAge;
  };

  const [babyAge, setBabyAge] = useState(getBabyAge());

  useEffect(() => {
    setTimeout(() => {
      setBabyAge(getBabyAge());
    }, 5000);
  });

  //previsto il 18/12
  //lastCiclo il 13/03
  // trim1 13-03 - 11-06
  // trim2 12-06 - 17-09
  // trim3 18-09 - 18-12

  return (
    <>
      <div className="container">

        {Object.entries(babyAge).map(([unit, value]) => {
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

export default CountBabyAge;
