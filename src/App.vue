<template>
  <search-result />
</template>

<script>
import SearchResult from "./components/SearchResult.vue";

export default {
  name: "App",
  components: {
    SearchResult,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap');
body{
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-color);
  background: var(--main-bg);
}
img{
  width: 80px;
  height: 80px;
}
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 90%;
  overflow: hidden;
  margin: auto;
}
:root {
  --primary-color: #E7E7EB;
  --sec-color: #A09FB1;
  --main-bg: #100E1D;
  --side-bg: #1E213A;
  --grey-search-btn: #6E707A;
  --search-btn: #3C47E9;
  --range-color: #FFEC65;
  --card-bg: #1E213A;
  --farenheit-bg: #585676;
  --celcius-bg: #E7E7EB;
  --date-time-color: #88869D;
}
.box-shadow {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.btn {
  padding: 0.5rem;
  outline: none;
  border: none;
  background: var(--grey-search-btn);
  color: var(--primary-color);
  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column{
  flex-direction: column;
}
.weather {
  margin-bottom: 1rem;
}
@media screen and (min-width: 700px){
  .search {
    float: left;
    width: 30%;
    position: fixed;
  }
  .weather {
    float: right;
    width: 70%;
  }
}
@media screen and (min-width: 1000px){
  .container{
    width: 90%;
  }
}
</style>
