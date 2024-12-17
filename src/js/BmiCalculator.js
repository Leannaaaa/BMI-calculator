import React from 'react';
import '../css/BmiCalculator.css';

const BmiCalculator = () => {
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [bmi, setBmi] = React.useState(null);
    const [status, setStatus] = React.useState("");  

    const calculateBmi = () => {
        if(weight === "" || height === "") {
            setStatus("Enter weight & height");
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));

        if(bmiValue < 18.5) {
            setStatus("Underweight");
        } else if(bmiValue >= 18.5 && bmiValue < 25) {
            setStatus("Normal weight");
        } else if(bmiValue >= 25 && bmiValue < 30) {
            setStatus("Overweight");
        } else {
            setStatus("Obesity");
        };
    }

    const handleHeightChange = (e) => {
        let value = e.target.value;
        if (/^\d{0,3}(\.\d{0,2})?$/.test(value)) {
            setHeight(value);
        }
    };
    
    const handleWeightChange = (e) => {
        let value = e.target.value;
        if (/^\d{0,3}(\.\d{0,2})?$/.test(value)) {
            setWeight(value); 
        }
    };

    return( 
        <div className='container'>
            <h1 className='title'>BMI Calculator</h1>
            <div>
                <label className='measurements'>Weight (kg):</label>
                <input 
                    type="text" 
                    value={weight} 
                    onChange={handleWeightChange}
                    placeholder="e.g. 70.5" 
                />
            </div>
            <div>
                <label className='measurements'>Height (cm):</label>
                <input 
                    type="text" 
                    value={height} 
                    onChange={handleHeightChange} 
                    placeholder="e.g. 170.5" 
                />
            </div>
            <div>
                <button onClick={calculateBmi}>Calculate</button>
            </div>
            <div>
                <h2 className='bmi'>BMI: {bmi}</h2>
                <h2 className='output'>Status: {status}</h2>
            </div>
        </div>
    );
}

export default BmiCalculator;
