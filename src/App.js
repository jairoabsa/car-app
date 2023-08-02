import './App.css';
import { useState } from "react";
import CarShow from "./CarShow";

function getRandomCar() {
    const cars = ["bmw", "chevy", "ford", "genesis", "honda", "mazda", "vw"];

    return cars[(Math.floor(Math.random() * cars.length))];
    };
    
function App() {
    const [cars, setCars] = useState([]);

    const handleClick= ()=> {
        setCars([...cars, getRandomCar()]);
    };

    const renderedCars = cars.map((cars, index) => {
        return <CarShow type={cars} key={index} />
    });

    return <div className='app' >
        <button onClick={handleClick}>Add Car</button>
        <div className='car-list'>{renderedCars}</div>
        </div>
};

export default App;
