import React, { useEffect,useState } from "react";
import './weather.css';

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Hyderabad");
    useEffect(() =>{

        const fetchWeather = async () => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchWeather();
    }, [search])
        
    

    
    return (
        <div className="wethContainer">

        



            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                        onChange={(event) => {
                            setSearch(event.target.value);

                        }}
                    />
                </div>
                {!city ? (
                    <p className="errorMsg">No data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}
                            </h1>
                            <h3 className="tempmin_max">Min:{city.temp_min}&deg;C|Max:{city.temp_max}&deg;C</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }


            </div>
        </div>
    )
}

export default Weather;