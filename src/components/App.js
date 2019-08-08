import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header'
import Result from './Result/Result';

//ApiKey
const APIKey = '32219664510c04acf8acc9067545915'

class App extends Component {
  state = {
    value: '',
    city: '',
    date: '',
    temp: '',
    wind: '',
    clouds: '',
    pressure: '',
    error: false,
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=c${APIKey}&units=metric`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Błąd")
      })
      .then(response => response.json())
      .then(data => {

        const date = new Date().toLocaleString()
        this.setState({
          city: data.name,
          date,
          temp: data.main.temp,
          wind: data.wind.speed,
          clouds: data.weather.description,
          pressure: data.main.pressure,
          error: false,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState(state => ({
          error: true,
          city: 'City not found'
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value} />
        <Result
          {...this.state}
        />
        {/*WYŚWIETLIĆ DANE*/}

      </div>

    );
  }
}

export default App;