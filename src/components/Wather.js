import React from 'react'
import './Header.css'

class Weather extends React.Component {

    render() {
        return (
            <div className="Wather">
            { this.props.city && 
            <div className="card__wrapper">
                <div className="card">
                <h1>{this.props.as1}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.current}</p>
                <p>Morning temperature°C : {this.props.tempmor1}</p>
                <p>Evening temperature°C : {this.props.tempeve1}</p>
                <p>Night temperature°C : {this.props.temng1}</p>
                <p>Cloudiness : {this.props.cloud0} </p>
                <p>Humidity : {this.props.hm1}</p>
                <p>Wind speed : {this.props.wn1}</p>
                </div>

                <div className="card">
                <h1>{this.props.as2}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur2}</p>
                <p>Morning temperature°C : {this.props.tempmor2}</p>
                <p>Evening temperature°C : {this.props.tempeve2}</p>
                <p>Night temperature°C : {this.props.tempeve2}</p>
                <p>Cloudiness : {this.props.cloud1} </p>
                <p>Humidity : {this.props.hm2}</p>
                <p>Wind speed : {this.props.wn2}</p>
                </div>


                <div className="card">
                <h1>{this.props.as3}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur3}</p>
                <p>Morning temperature°C : {this.props.tempmor3}</p>
                <p>Evening temperature°C : {this.props.tempeve3}</p>
                <p>Night temperature°C : {this.props.tempeve3}</p>
                <p>Cloudiness : {this.props.cloud2} </p>
                <p>Humidity : {this.props.hm3}</p>
                <p>Wind speed : {this.props.wn3}</p>
                </div>


                <div className="card">
                <h1>{this.props.as4}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur4}</p>
                <p>Morning temperature°C : {this.props.tempmor4}</p>
                <p>Evening temperature°C : {this.props.tempeve4}</p>
                <p>Night temperature°C : {this.props.tempeve4}</p>
                <p>Cloudiness : {this.props.cloud3} </p>
                <p>Humidity : {this.props.hm4}</p>
                <p>Wind speed : {this.props.wn4}</p>
                </div>


                <div className="card">
                <h1>{this.props.as5}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur5}</p>
                <p>Morning temperature°C : {this.props.tempmor5}</p>
                <p>Evening temperature°C : {this.props.tempeve5}</p>
                <p>Night temperature°C : {this.props.tempeve5}</p>
                <p>Cloudiness : {this.props.cloud4} </p>
                <p>Humidity : {this.props.hm5}</p>
                <p>Wind speed : {this.props.wn5}</p>
                </div>


                <div className="card">
                <h1>{this.props.as6}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur6}</p>
                <p>Morning temperature°C : {this.props.tempmor6}</p>
                <p>Evening temperature°C : {this.props.tempeve6}</p>
                <p>Night temperature°C : {this.props.tempeve6}</p>
                <p>Cloudiness : {this.props.cloud5} </p>
                <p>Humidity : {this.props.hm6}</p>
                <p>Wind speed : {this.props.wn6}</p>
                </div>


                <div className="card">
                <h1>{this.props.as7}</h1>
                <p>Weather in {this.props.city}</p>    
                <p>Current Temperature {this.props.cur7}</p>
                <p>Morning temperature°C : {this.props.tempmor7}</p>
                <p>Evening temperature°C : {this.props.tempeve7}</p>
                <p>Night temperature°C : {this.props.tempeve7}</p>
                <p>Cloudiness : {this.props.cloud6} </p>
                <p>Humidity : {this.props.hm7}</p>
                <p>Wind speed : {this.props.wn7}</p>
                </div>
                
                </div>  
            }
            <p className="Error">{this.props.error}</p>
            </div>
        )
    }
}

export default Weather