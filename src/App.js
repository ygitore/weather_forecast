import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends Component{
  state={weatherforecast:[]}
  weather = (term) =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=6f03413c7fb49d61ed84cd9ef21fdd00`)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      this.setState({weatherforecast:data.list})
    })
  }
  render(){
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.weather} />
        {
          this.state.weatherforecast.map(w=><li><i>{w.clouds.dt_txt }</i> {w.weather[0].description}</li>)
        }
      </div>
    )
  }
}

export default App;
