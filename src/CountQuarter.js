import React, { useState, useEffect } from "react";

const CountQuarter = () => {
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

  return <div className="quarter"></div>;
};

export default CountQuarter;
