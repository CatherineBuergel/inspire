export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(2)
    this.humidity = data.humidity || data.main.humidity
    this.description = data.description || data.weather[0].description
  }

  getTemplate() {
    return `	<h4>Today's Weather Report</h4>
		<h6>${this.city}</h6>
		<h6>${this.temp}</h6>
		<p>${this.description}</p>
		<p>${this.humidity}</p>`
  }


}