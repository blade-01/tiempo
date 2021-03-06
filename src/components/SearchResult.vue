<template>
  <main class="main">
      <div class="main-content">
        <Search :today="today" :icon="icon" @fetchWeather="fetchData"/>
        <div class="weather">
          <div class="container">
            <div class="weather-inner">
              <div class="degrees">
                <button class="btn degree" @click="convertToCelc">℃</button>
                <button class="btn degree" @click="convertToFran">℉</button>
              </div>
              <div class="day-card">
                <div class="card box-shadow" v-for="weather in weathers" :key="weather.index">
                  <p>{{ isToday(weather.dt_txt) }}</p>
                  <img :src="icon" :alt="weather.weather[0].icon" />
                  <div class="day-degree flex-between">
                    <p><b>{{ roundUp(weather.main.temp) }}℃</b></p>
                    <p>{{ roundUp(weather.main.temp * 9/5 + 32) }}℉</p>
                  </div>
                </div>
              </div>
              <Highlights :wind="wind" :humidity="humidity" :pressure="pressure" :visibility="visibility" />
            </div>
            <div class="attr">
              <p>Created by <a href="https://github.com/blade-01" target="_blank">Blade</a> - devchallenges.io</p>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
import moment from 'moment';
import Search from "@/components/Search.vue";
import Highlights from "@/components/Highlights.vue";
import RoundUp from "@/mixins/RoundUp";
export default {
  name: 'Main',
  components: {Search, Highlights},
  data() {
    return {
      weathers: null,
      today: null,
      wind: '',
      humidity: '',
      visibility: '',
      pressure: '',
      icon: '',
    }
  },
  methods: {
    fetchData(data) {
      this.weathers = data.list;
      this.today = data.list[0];
      this.wind = data.list[0].main.sea_level ? data.list[0].main.sea_level : '0';
      this.humidity = data.list[0].main.humidity;
      this.pressure = data.list[0].main.pressure;
      this.visibility = data.list[0].visibility ? data.list[0].visibility : '0';
      this.icon = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    },
    isToday(date) {
      return moment(date).format('Do MMM - hA');
    },
  },
  mixins: [RoundUp],
}
</script>

<style scoped>
.day-card {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  padding: 1rem;
  background: var(--card-bg);
  text-align: center;
  margin: 0.7rem;
  flex-basis: 40%;
}
.card img{
  margin: 0.8rem 0;
  width: 100px;
  height: 100px;
}
.degrees {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
}
.btn.degree {
  border-radius: 50%;
  cursor: initial;
}
.btn.degree:nth-child(1) {
  background: var(--celcius-bg);
  color: var(--side-bg);
}
.btn.degree:nth-child(2) {
  background: var(--farenheit-bg);
  margin-left: 0.5rem;
}
.attr {
  text-align: center;
  margin: 2rem 0 0;
}
.attr a {
  color: var(--date-time-color);
  font-weight: bold;
}
@media screen and (min-width: 700px){
  .card {
    flex-basis: 25%;
  }
}
@media screen and (min-width: 1000px){
  .card {
    padding: 1rem;
    background: var(--card-bg);
    text-align: center;
    margin: 0 0.5rem 0.5rem 0;
  }
}
@media screen and (min-width: 1200px){
  .day-card {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .card {
    padding: 1rem;
    background: var(--card-bg);
    text-align: center;
    margin: 0 0.5rem 0 0;
  }
}
</style>