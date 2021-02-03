import React from 'react';
import Form from './Form';
import Weather from './Wather'

const API_KEY = '3a1f4b18f0c4219b6cd08467e7d14b67';

class Body extends React.Component {
  
    state = {
        temp: undefined,
        city: undefined,
        error: '',
        daily: undefined,
        show: false,
        tempcou1: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;
        if (lat && lon) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        let data = await api_url.json();
            console.log(data.daily[0].dt)

        let date0 = new Date(data.daily[0].dt * 1000);    
        let date1 = new Date(data.daily[1].dt * 1000);
        let date2 = new Date(data.daily[2].dt * 1000);
        let date3 = new Date(data.daily[3].dt * 1000);
        let date4 = new Date(data.daily[4].dt * 1000);
        let date5 = new Date(data.daily[5].dt * 1000);
        let date6 = new Date(data.daily[6].dt * 1000);
        let as1 = date0.toLocaleDateString()
        let as2 = date1.toLocaleDateString()
        let as3 = date2.toLocaleDateString()
        let as4 = date3.toLocaleDateString()
        let as5 = date4.toLocaleDateString()
        let as6 = date5.toLocaleDateString()    
        let as7 = date6.toLocaleDateString()
        // console.log(as7)
        
        this.setState({
            as1 : as1,
            as2 : as2,
            as3 : as3,
            as4 : as4,
            as5 : as5,
            as6 : as6,
            as7 : as7,
            cur: data.current.temp,
            temd1 : data.daily[0].temp.day,
            temd2 : data.daily[1].temp.day,
            temd3 : data.daily[2].temp.day,
            temd4 : data.daily[3].temp.day,
            temd5 : data.daily[4].temp.day,
            temd6 : data.daily[5].temp.day,
            temd7 : data.daily[6].temp.day,
            temd8 : data.daily[7].temp.day,
            tempmor1: data.daily[0].temp.morn,
            tempeve1: data.daily[0].temp.eve,
            tempcou1: data.daily[0].clouds,
            humidity1: data.daily[0].humidity,
            temng1: data.daily[0].temp.night,
            city: data.timezone,
            error: undefined,
            daily: data,
            wind1: data.daily[0].wind_speed,


            temng2: data.daily[1].temp.night,
            tempmor2: data.daily[1].temp.morn,
            tempeve2: data.daily[1].temp.eve,
            tempcou2: data.daily[1].clouds,
            humidity2: data.daily[1].humidity,
            wind2: data.daily[1].wind_speed,


            temng3: data.daily[2].temp.night,
            tempmor3: data.daily[2].temp.morn,
            tempeve3: data.daily[2].temp.eve,
            tempcou3: data.daily[2].clouds,
            humidity3: data.daily[2].humidity,
            wind3: data.daily[2].wind_speed,

            temng4: data.daily[3].temp.night,
            tempmor4: data.daily[3].temp.morn,
            tempeve4: data.daily[3].temp.eve,
            tempcou4: data.daily[3].clouds,
            humidity4: data.daily[3].humidity,
            wind4: data.daily[3].wind_speed,


            temng5: data.daily[4].temp.night,
            tempmor5: data.daily[4].temp.morn,
            tempeve5: data.daily[4].temp.eve,
            tempcou5: data.daily[4].clouds,
            humidity5: data.daily[4].humidity,
            wind5: data.daily[4].wind_speed,

            temng6: data.daily[5].temp.night,
            tempmor6: data.daily[5].temp.morn,
            tempeve6: data.daily[5].temp.eve,
            tempcou6: data.daily[5].clouds,
            humidity6: data.daily[5].humidity,
            wind6: data.daily[5].wind_speed,

            temng7: data.daily[6].temp.night,
            tempmor7: data.daily[6].temp.morn,
            tempeve7: data.daily[6].temp.eve,
            tempcou7: data.daily[6].clouds,
            humidity7: data.daily[6].humidity,
            wind7: data.daily[6].wind_speed,
        })
        
    } else {
        this.setState({
            temp: undefined,
            city: undefined,
            error: "Enter the correct data",
            show: true,
            lat: undefined,
            lon: undefined
        })
    }

}
    render() {
        return (
            <div>
            <Form getWeat={this.getWeather}/>  
            <Weather 
                as1 = {this.state.as1}
                as2 = {this.state.as2}
                as3 = {this.state.as3}
                as4 = {this.state.as4}
                as5 = {this.state.as5}
                as6 = {this.state.as6}
                as7 = {this.state.as7}
                current = {this.state.cur}
                cur1 = {this.state.temd1}
                cur2 = {this.state.temd2}
                cur3 = {this.state.temd3}
                cur4 = {this.state.temd4}
                cur5 = {this.state.temd5}
                cur6 = {this.state.temd6}
                cur7 = {this.state.temd7}
                tempmor1={this.state.tempmor1}  
                tempeve1={this.state.tempeve1}
                temng1={this.state.temng1}
                city={this.state.city}
                error={this.state.error}
                daily={this.daily}
                cloud0={this.state.tempcou1}
                hm1={this.state.humidity1}
                wn1={this.state.wind1}

                tempmor2={this.state.tempmor2}  
                tempeve2={this.state.tempeve2}
                cloud1={this.state.tempcou2}
                hm2={this.state.humidity2}
                wn2={this.state.wind2}
                temng2={this.state.temng2}

                tempmor3={this.state.tempmor3}  
                tempeve3={this.state.tempeve3}
                cloud2={this.state.tempcou3}
                hm3={this.state.humidity3}
                wn3={this.state.wind3}
                temng3={this.state.temng3}

                tempmor4={this.state.tempmor4}  
                tempeve4={this.state.tempeve4}
                cloud3={this.state.tempcou4}
                hm4={this.state.humidity4}
                wn4={this.state.wind4}
                temng4={this.state.temng4}

                tempmor5={this.state.tempmor5}  
                tempeve5={this.state.tempeve5}
                cloud4={this.state.tempcou5}
                hm5={this.state.humidity5}
                wn5={this.state.wind5}
                temng5={this.state.temng5}

                tempmor6={this.state.tempmor6}  
                tempeve6={this.state.tempeve6}
                cloud5={this.state.tempcou6}
                hm6={this.state.humidity6}
                wn6={this.state.wind6}
                temng6={this.state.temng6}


                tempmor7={this.state.tempmor7}  
                tempeve7={this.state.tempeve7}
                cloud7={this.state.tempcou7}
                hm7={this.state.humidity7}
                wn7={this.state.wind7}
                temng7={this.state.temng7}
            />
            </div>
            )
    }
}

export default Body