import React, {  useEffect, useState } from 'react'
import Spinner from './Spinner'
import WeatherCity from './WeatherCity'

const Weather = () => {

    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [message, setMessage] = useState("")

    const KEY = process.env.REACT_APP_API_KEY
    const BASE_URL = process.env.REACT_APP_API_URL

    const handleGetWeatherApi = async () => {
        setLoading(true)
        setMessage('')
        try {
            const res = await fetch(`${BASE_URL}/weather/?q=${city}&units=metric&APPID=${KEY}`)
            const response = await res.json();
            if(response.cod !== 200) {
                setMessage(response.message)
            }
            else {
                setData(response)
            }        
        }
        catch (error) {
            console.error(error)
        }
        finally {
            console.log("it works")
            setLoading(false)
        }
        setCity("")
    }

    useEffect(() => {      
        const getDataForBelgrade = async () => {
            try {
                const res = await fetch(`${BASE_URL}/weather/?q=${'Belgrade'}&units=metric&APPID=${KEY}`)
                const response = await res.json();
                if(response.cod !== 200) {
                    setMessage(response.message)
                }
                else {
                    setData(response)
                }          
            }
            catch (error) {
                console.error(error)
            }
        }       
        getDataForBelgrade()
    },[])

    return (
        <>
        <div className='d-flex justify-content-center align-items-center mt-3 flex-column w-100 '>
            <div className='d-flex justify-content-center align-items-center flex-column'>
            <p className='text-center'>Weather App</p>
            <div className='d-flex flex-row'>
                <input  className='form-control custom-input' type="text" value={city} onChange={(e) => setCity(e.target.value) }/>
                <button className='btn  custom-button' onClick={handleGetWeatherApi}>Search</button>
            </div>
            </div>

            <div className='mt-3'>
                {loading && <Spinner />}
                {message ? <p>{message}</p> : ""}
                {!loading && data && !message && <WeatherCity  data={data}/>}
            </div>
        </div>
        
        </>
    )
}

export default Weather