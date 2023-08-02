import "./CarShow.css";
import {useState} from 'react';
import bmw from './cars/bmw-m2.jpg';
import chevy from './cars/chevrolet-corvette.jpg'
import ford from './cars/ford-mustang.jpg';
import genesis from './cars/genesis-g70.jpg';
import honda from './cars/honda-civic.jpg';
import mazda from './cars/mazda-miata.jpg';
import vw from './cars/volkswagen-golf.jpg';
import flag from './cars/racing-flag-1736.png';

const vehicles = {
    bmw, chevy, ford, genesis, honda, mazda, vw
}

function CarShow({type}) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1 );
    }
    return <div className='car-show' onClick={handleClick}>
        <img className='car' alt="Car" src={vehicles[type]}/>
        <img className='flag'
        alt="Flag"
        src={flag}
        style={{width: 10 + 10*clicks}}
        />
    </div>;
}

export default CarShow;