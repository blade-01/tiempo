<template>
  <div class="search">
    <div class="container">
      <div class="search-inner">
        <div class="flex-center">
          <button class="btn" @click="openSearch">Search for places</button>
          <a href="https://github.com/blade-01" target="_blank">
          <svg class="w-6 h-6 btn icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
        <section class="today-data">
            <div class="today-card">
              <div class="today" v-if="today">
                <img :src="icon" alt="img_weather" />
                <p>{{ Math.round(today.main.temp) }}<span>℃</span></p>
                <p>{{ today.weather[0].main }}</p>
                <p>Today - {{ isToday(today.dt_text) }}</p>
                <p class="flex"><svg class="w-6 h-6 location" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span class="location-tag">{{ location }}</span></p>
              </div>
            </div>    
        </section>
      </div>
    </div>
  </div>
  <!-- Second Background -->
  <div class="search" :class={side:open}>
    <div class="container">
      <div class="close-tag">
        <svg class="w-6 h-6 close" @click="open = false" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div class="search-inner">
        <form class="buttons" @submit.prevent="searchWeather">
        <div class="search-tab">
          <input type="text" id="search" placeholder="search location" v-model="searchParam" />
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <button class="btn search-btn">Search</button>
        </form>
        <small>{{err}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Search',
  props: ['today', 'icon'],
  emits: ['fetchWeather'],
  data() {
    return {
      open: false,
      searchParam: 'Lagos',
      err: '',
      location: '',
      api_key: 'fa6b771ed8192cc654a3f6dfb3988af7',
    };
  },
  methods: {
    openSearch() {
      this.open = true;
      this.searchParam = '';
    },
    searchWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.searchParam}&appid=${this.api_key}&cnt=5`)
          .then(res => {
            if (res.status !== 200) {
            this.err = 'Please enter a valid location';
            setTimeout(() => {this.err = '';}, 2000);
            throw Error(res.statusText);
            } else {
              this.err = '';
              this.open = false;
              this.location = this.searchParam;
              return res.json();
            }
          })
          .then(data => {
            this.$emit('fetchWeather', data);
          })
          .catch(err => {
            console.log(err);
          });
    },
    isToday(date) {
      return moment(date).format('ddd, D MMM');
    }
  },
  mounted() {
    // fetch('https://extreme-ip-lookup.com/json/')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.searchParam = data.city;
    //     this.searchWeather();
    //     });
    this.searchWeather();
  }
};
</script>

<style scoped>
.search{
  background-color: var(--side-bg);
  background-image: url('../assets/img/Cloud-background.png');
  background-repeat: no-repeat;
  background-position: 0 70px;
  background-size: 100% 35%;
  background-blend-mode: soft-light;
  height: 100vh;
  padding: 1.5rem 0;
}
.search:nth-child(2) {
  background-image: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  z-index: 100;
  transition: all 0.5s ease-in-out;
}
.search:nth-child(2).side {
    width: 100%;
  }
.btn.icon {
  border-radius: 50%;
  width: 30px;
  padding: 0.3rem;
}
.today-data{
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.today-card {
  margin: 2rem 0;
}
.today img {
  width: 130px;
  height: 140px;
}
.today  p{
  margin: 0 0 2rem;
  color: var(--sec-color);
}
.today p:nth-child(2) {
  font-size: 90px;
  color: var(--primary-color);
}
.today p:nth-child(3) {
  font-size: 35px;
  margin: 4rem 0;
}
span:first-child {
  font-size: 30px;
  color: var(--sec-color);
}
span.location-tag {
  text-transform: capitalize;
}
.today .location {
  width: 20px;
  margin-right: 0.2rem;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.search-tab {
  position: relative;
  width: 100%;
}
.search-tab svg {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 15px;
}
.search-tab input {
  outline: none;
  background: none;
  border: solid 1px gray;
  padding: 0.5rem 2rem;
  flex-basis: 70%;
  width: 100%;
  display: block;
  color: var(--primary-color);
}
.search-tab input::placeholder {
  color: var(--primary-color);
}
.search-tab input:focus{
  background: transparent;
}
.search-btn {
  background: var(--search-btn);
  flex-basis: 30%;
  padding: 0.6rem;
}
small {
  color: red;
  letter-spacing: 2px;
}
svg.close {
  width: 30px;
  margin-bottom: 1rem;
  cursor: pointer;
}
.close-tag {
  display: flex;
  justify-content: flex-end;
}
.flex-center {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
@media screen and (min-width: 500px) {
  .today img {
    width: 150px;
    height: 150px;
    margin-top: 0rem;
  }
  .today p:nth-child(2) {
    font-size: 70px;
  }
  .today p:nth-child(3) {
    font-size: 20px;
    margin: 1rem 0;
  }
}
@media screen and (min-width: 700px) {
  .search:nth-child(2).side {
    width: 30%;
  }
}
@media screen and (min-width: 1000px) {
  .today p:nth-child(2) {
    font-size: 70px;
    margin-bottom: 2rem;
  }
  .today p:nth-child(3) {
    font-size: 35px;
    margin: 1rem 0;
  }
}
</style>