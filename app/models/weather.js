export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(2)
    this.humidity = data.humidity || data.main.humidity
    this.description = data.description || data.weather[0].description
  }

  getTemplate() {
    return `
    	<h1>${this.city}</h1>
			<h3>${this.temp} °F</h3>
			<h5>Today looks like: ${this.description}</h5>`
  }


}