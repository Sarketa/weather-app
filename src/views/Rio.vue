<template>
  <FilterNav />
  <!--Next hours-->
  <main>
    <section class="next-hour">
      <div class="weather-wrap">
        <div class="next-box">
          <a class="myButton" @click="reloadPage">Refresh</a>
          <h2>Next Hours</h2>
        </div>
      </div>
      <div class="hours">
        <div class="h" v-for="hour in hourly" :key="hour.dt">
          <div class="max-temp">{{ Math.round(hour.temp) }}°C</div>
          <div class="uvi">{{ Math.round(hour.uvi) }}%</div>
          <div>
            <img :src="iconLink + hour.weather[0].icon + '.png'" />
          </div>
          <div>
            <p>{{ weather.description }}</p>
          </div>
        </div>
      </div>
      <div class="hours-h">
        <HourlyWeathers :hourly="hourly" />
      </div>
    </section>
    <!--Next 5 days-->
    <section class="next-day">
      <div class="weather-wrap">
        <div class="next-box">
          <h2>Next 5 days</h2>
        </div>
      </div>
      <div class="daily" v-for="day in daily" :key="day.dt">
        <div>
          <img :src="iconLink + day.weather[0].icon + '.png'" />
        </div>
        <div>
          <p class="">{{ toDayOfWeek(day.dt) }}</p>
          <p>{{ weather.description }}</p>
        </div>

        <div class="max-temp">{{ Math.round(day.temp.max) }}°C</div>
        <div class="min-temp">{{ Math.round(day.temp.min) }}°C</div>
      </div>
    </section>
  </main>
</template>

<script>
import FilterNav from "../components/FilterNav.vue";
import HourlyWeathers from "../components/HourlyWeather.vue";
import "../assets/main.css";

export default {
  components: { FilterNav, HourlyWeathers },
  data() {
    return {
      weather: {
        cityName: "",
        country: "",
        temperature: null,
        description: "",
        minDes: "",
        name: "",
        icon: "",
      },
      daily: [],
      hourly: null,
      iconLink: "http://openweathermap.org/img/wn/",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function() {
      const key = "1f89da47fe4d0be6bbbf376af70bdb58";
      const baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=-22.86491&lon=-43.18282&exclude=minutely,alerts&appid=${key}&units=metric`;

      const res = await fetch(baseURL);
      const data = await res.json();
      this.weather.temperature = Math.round(data.current.temp);
      this.weather.description = data.daily[0].weather[0].description;
      this.weather.icon =
        this.iconLink + data.daily[0].weather[0].icon + ".png";
      this.iconLink + data.hourly[0].weather[0].icon + ".png";
      this.daily = data.daily.slice(1, 5);
      this.hourly = data.hourly.slice(0, 4);
      this.weather.name = data.timezone;
    },
    toDayOfWeek(timstamp) {
      const newDate = new Date(timstamp * 1000);
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return days[newDate.getDay()];
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
.daily {
  display: flex;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  padding: 10px 10px;
  text-align: center;
  justify-content: space-between;
}
.hours {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.hours .h .uvi {
  color: #29b3d8;
}
.hours-h {
  display: flex;
  justify-content: space-evenly;
}
.next-box h2 {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
}
.next-day {
  margin-top: 5%;
}
.myButton {
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 5px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 23px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
}
.myButton:hover {
  background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
  background-color: #6c7c7c;
  color: white;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
