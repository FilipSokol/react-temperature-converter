import React, { useState } from 'react';

    const TemperatureField = ({temperature, scale, onTemperatureChange}) => {
        return(
            <input 
            value = {temperature}
            type = "number" 
            scale = {scale}
            onChange = {(e) => onTemperatureChange(e.target.value)}
            />
        );
    }

    const ConvertTemperature = (temperature, to) => {
        const input = parseFloat(temperature);
            if (Number.isNaN(input)) {
            return '';
        }
        return ( 
            to === "f" ? (temperature * 9 / 5) + 32  : Math.round(((temperature - 32) * 5 / 9) * 1000) / 1000
        );
    }

    const TempZones = ({temperature}) => {
        if (temperature >= 100) {
            return <p className = "hot">🔥</p>;
        }
        else if (temperature < 0) {
            return <p className = "cold">🥶</p>;
        }
        return <p className = "normal">💤</p>;
      }

    const Calculator = () => {

        const [temperatureC, setTemperatureC] = useState("");
        const [temperatureF, setTemperatureF] = useState("");

    return(
        <div className="container">

            <div className="temp-celcius">
            <p>Enter Temperature in Celsius:</p>
            <TemperatureField 
            temperature = {temperatureC} 
            scale = "c" 
            onTemperatureChange = {(t) => {
                setTemperatureC(t);
                setTemperatureF(ConvertTemperature(t, "f"));
            }} 
            />
            </div>

            <div className="temp-fahrenheit">
            <p>Enter Temperature in Fahrenheit:</p>
            <TemperatureField 
            temperature = {temperatureF} 
            scale = "f"  
            onTemperatureChange = {(t) => {
                setTemperatureF(t);
                setTemperatureC(ConvertTemperature(t, "c"));
            }} 
            />
            </div>

            <div>
                <TempZones 
                temperature = {temperatureC}/>
            </div>

        </div>
    );
    
}

export default Calculator;