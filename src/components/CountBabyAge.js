import React, { useState, useEffect } from "react";

const CountBabyAge = () => {
  const getBabyAge = () => {
    const timePast = new Date() - new Date(`2021-03-13`);
    let babyAge = Math.floor(timePast / (1000 * 60 * 60 * 24 * 7));
    return babyAge;
  };

  const [babyAge, setBabyAge] = useState(getBabyAge());
  const imageUrl = `https://images.agoramedia.com/wte3.0/gcms/wbw-${babyAge}-fruit.png`;

  useEffect(() => {
    setTimeout(() => {
      setBabyAge(getBabyAge());
    }, 50000);
  });

  //previsto il 18/12
  //lastCiclo il 13/03
  // trim1 13-03 - 11-06
  // trim2 12-06 - 17-09
  // trim3 18-09 - 18-12

  return (
    <>
      <div className="weekCounter">
        <span>{babyAge}</span>
        <p>settimane sono già passate </p>
      </div>

      <div
        className="fruits"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </>
  );
};

export default CountBabyAge;
