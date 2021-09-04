<template>
  <div id="app">
    <main>
      <section>
        <form class="search-box" @submit.prevent="fetchWeather">
          <input
            type="text"
            class="search-bar"
            placeholder="Search..."
            v-model="citySearch"
          />
        </form>
        <div class="error" v-if="error">No city found</div>
        <div v-if="visible">
          <div class="weather-wrap">
            <div class="lokacioni-box">
              <div class="lokacija">
                {{ weather.cityName }} - {{ weather.country }}
              </div>
              <div class="date">{{ dateBuilder() }}</div>
            </div>
            <div class="weather-box">
              <div class="temperatura">{{ weather.temperature }}&#176;c</div>
              <div class="opis_vremena">
                {{ weather.description }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      error: false,
      citySearch: "",
      weather: {
        cityName: "",
        country: "",
        temperature: null,
        description: "",
        minDes: "",
      },
    };
  },
  methods: {
    fetchWeather: async function() {
      const key = "266df4da89aea14f8ba1b8df800d3a36";
      const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&units=metric&appid=${key}&units=metric`;
      try {
        const res = await fetch(baseURL);
        const data = await res.json();
        this.weather.cityName = data.name;
        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.minDes = data.weather[0].main;

        this.citySearch = "";
        this.error = null;
      } catch (err) {
        this.error = true;
      }
      this.visible = true;
    },
    dateBuilder() {
      let d = new Date();
      let meseci = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novemver",
        "December",
      ];
      let dani = [
        "Monday",
        " Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      let dan = dani[d.getDay()];
      let date = [d.getDate()];
      let mesec = meseci[d.getMonth()];
      let godina = d.getFullYear();

      return `${dan} ${date} ${mesec} ${godina}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.error {
  text-align: center;
  margin-top: 15px;
  font-size: 20px;
  color: #ddd;
}
section {
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.726),
    rgba(0, 0, 0, 0.781)
  );
}
.search-box {
  width: 40%;
  margin-bottom: 50px;
  margin-left: 50%;
  margin-right: 50%;
  transform: translate(-50%);
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.lokacioni-box .lokacija {
  color: rgb(255, 255, 255);
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  text-shadow: 0.2px 2px rgba(0, 0, 0, 0.25);
}

.lokacioni-box .date {
  color: rgb(255, 255, 255);
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  text-shadow: 0.2px 2px rgba(0, 0, 0, 0.25);
}

.weather-wrap {
  text-align: center;
}
.weather-wrap .temperatura {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 2em;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 7px 5px rgba(0, 0, 0, 0.25);
}
.weather-wrap .vreme {
  color: #fff;
  font-size: 6em;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 5px rgba(0, 0, 0, 0.25);
}
.weather-wrap .opis_vremena {
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  font-style: bold;
  text-transform: uppercase;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
</style>
