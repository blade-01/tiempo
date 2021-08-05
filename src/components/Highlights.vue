<template>
  <div class="weather-content">
    <h3>Today's Highlights</h3>
    <div class="highlight-card">
      <div class="highlight box-shadow">
        <h3>Wind status</h3>
        <p>{{ roundUp(wind) }} mph</p>
        <p class="flex"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg> <span>wsw</span></p>
      </div>
      <div class="highlight box-shadow">
        <h3>Humidity</h3>
        <p>{{ roundUp(humidity) }} %</p>
        <div>
          <input type="range" min="0" max="100" :value="humidity" disabled/>
        </div>
      </div>
      <div class="highlight box-shadow">
        <h3>Visibility</h3>
        <p>{{ roundUp(visibility) }} miles</p>
      </div>
      <div class="highlight box-shadow">
        <h3>Air Pressure</h3>
        <p>{{ roundUp(pressure) }} mb</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  props: ['wind', 'humidity', 'pressure', 'visibility'],
  methods: {
    roundUp(data) {
      return Math.round(data);
    },
  }
}
</script>

<style scoped>
.weather-data {
  margin: 3rem 0 1rem;
}
.highlight-card {
  margin: 2rem 0 0;
}
.highlight {
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  text-align: center;
}
.highlight p {
  margin: 1rem 0;
}
.highlight svg {
  width: 20px;
}
.highlight.flex {
  align-items: center;
}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 26px;
  height: 3px;
  width: 170px;
  background-color: yellow;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 10px;
  height: 10px;
  border: 1px solid yellow;
  border-radius: 50%;
  background: #fff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
}
@media screen and (min-width: 700px){
  .highlight-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  .highlight {
    margin: 0;
  }
}
@media screen and (min-width: 1000px){
  .highlight-card {
    grid-gap: 2rem;
  }
}
@media screen and (min-width: 1200px){
  .highlight-card {
    grid-gap: 1rem;
  }
}
</style>