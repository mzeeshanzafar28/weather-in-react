import React, { useState, Component } from "react";
import axios from "axios";

export default class Main extends Component {
    state = {
        cityName: "First React Project By Zeeshan",
        currentTemp: "Github@mzeeshanzafar28",
        actualWeather: "There's pain of Regret and there's pain of Discipline. Choose yours!",
        pressure: "",
        windDeg: "",
        windSpeed: "",



    };
    render() {
        return (
            <React.Fragment>
                <div id="wrapper">
                    <input type="text" placeholder="Enter Your City" id="search-bar" />
                    <button id="search-btn" onClick={this.goForSearch}>Search</button>
                </div>

                <div id="card-wrapper">
                    <div class="card text-white bg-dark mb-3" style={{ "max-width": "38rem" }}>
                        <div class="card-header"><center><h4>{this.state.cityName}</h4></center></div>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.currentTemp}</h5>
                            <p class="card-text">{this.state.actualWeather}</p>
                            <p class="card-text">{this.state.pressure}</p>
                            <p class="card-text">{this.state.windDeg}</p>
                            <p class="card-text">{this.state.windSpeed}</p>



                        </div>
                    </div>
                </div>

            </React.Fragment >
        );
    }

    goForSearch = () => {
        var cityName = document.getElementById("search-bar").value;
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=85cb7585904f4716890b842fe2f41b49")
            .then(response => {
                console.log(response);
                this.setState({
                    cityName: response.data.name + ", " + response.data.sys.country,
                    currentTemp: "Temperature: " + (parseFloat(response.data.main.temp) - 273.15).toPrecision(4) + "C",
                    actualWeather: "Weather Description: " + response.data.weather[0].description,
                    pressure: "Pressure: " + response.data.main.pressure,
                    windDeg: "Wind Degree: " + response.data.wind.deg,
                    windSpeed: "Wind Speed: " + response.data.wind.speed,
                });
            }).catch(error => {
                console.error(error);
            });

    }
}