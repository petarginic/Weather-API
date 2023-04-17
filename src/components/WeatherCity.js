import React from 'react'

const WeatherCity = ({data}) => {

    const icons = {
        Clear: "https://www.iconpacks.net/icons/5/free-icon-sun-and-blue-cloud-16460.png",
        Clouds: "https://www.iconpacks.net/icons/2/free-icon-clouds-4269.png",
        Rain: "https://www.iconpacks.net/icons/3/free-rain-cloud-icon-7956.png",
        Sun: "https://www.iconpacks.net/icons/2/free-sun-icon-1583.png",
        Mist: "https://cdn4.iconfinder.com/data/icons/weather-548/64/fog-weather-mist-512.png",
        Thunder: "https://www.iconpacks.net/icons/5/free-lightning-and-blue-rain-cloud-icon-16533.png"

    }
  return (
    <div className='d-flex flex-column w-100'>
      <h1 className='text-center'>{data.name}</h1>
        <div className='d-flex flex-row justify-content-center align-items-center p-3'>
          <img style={{width: "3rem"}} src={ icons[data.weather[0].main]} alt="city data" />
          <p className='ml-1 mt-1'>{data.main.temp} &#8451;</p>
        </div>
        
        <div className=''>
        <p>{data.weather[0].description}</p>
        <p>wind speed {data.wind.speed}</p>
        <p>min temperature {data.main.temp_min} &#8451;</p>
        <p>max temperature {data.main.temp_max} &#8451;</p>
        </div>  
    </div>
  )
}

export default WeatherCity