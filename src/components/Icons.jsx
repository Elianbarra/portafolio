import React from 'react'

const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='images/thunderstorm.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            icon='images/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='images/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='images/snow.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='images/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            icon='images/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            icon='images/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            icon='images/haze.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            icon='images/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            icon='images/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            icon='image/clear-day.svg'
            console.log('LIMPIO');    
    }
  return icon
}

export default Icons;