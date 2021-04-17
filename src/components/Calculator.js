import React, { useState } from "react";

const TemperatureField = ({ temperature, scale, onTemperatureChange }) => {
  return (
    <input
      value={temperature}
      type="number"
      scale={scale}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  );
};

const convertTemperature = (temperature, targetUnit) => {
  if (temperature === "") {
    return (temperature = "");
  }
  if (targetUnit === "f") {
    return Math.round(((temperature * 9) / 5 + 32) * 1000) / 1000;
  }
  if (targetUnit === "c") {
    return Math.round((((temperature - 32) * 5) / 9) * 1000) / 1000;
  }
};

const TempZone = ({ temperature }) => {
  if (temperature >= 100) {
    return <p className="hot">🔥</p>;
  } else if (temperature < 0) {
    return <p className="cold">🥶</p>;
  } else {
    return <p className="normal">💤</p>;
  }
};

const Calculator = () => {
  const [temperatureC, setTemperatureC] = useState("");
  const [temperatureF, setTemperatureF] = useState("");

  return (
    <div className="container">
      <div className="temp-celcius">
        <p>Enter Temperature in Celsius:</p>
        <TemperatureField
          temperature={temperatureC}
          scale="c"
          onTemperatureChange={(t) => {
            setTemperatureC(t);
            setTemperatureF(convertTemperature(t, "f"));
          }}
        />
      </div>

      <div className="temp-fahrenheit">
        <p>Enter Temperature in Fahrenheit:</p>
        <TemperatureField
          temperature={temperatureF}
          scale="f"
          onTemperatureChange={(t) => {
            setTemperatureF(t);
            setTemperatureC(convertTemperature(t, "c"));
          }}
        />
      </div>
      <div>
        <TempZone temperature={temperatureC} />
      </div>
    </div>
  );
};

export default Calculator;
