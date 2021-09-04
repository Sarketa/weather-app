<template>
  <!--v-for loop to print next hour-->
  <div class="hourly-temp" v-for="(time, index) in filterdList" :key="index">
    <HourlyTemp :time="time" />
  </div>
</template>

<script>
import HourlyTemp from "./HourlyTemp.vue";
export default {
  namme: "HourlyWeathers",
  //* prop hourly with hourly data
  props: ["hourly"],
  components: { HourlyTemp },
  computed: {
    filterdList() {
      //* returning hourly data to use in for loop
      return this.hourly;
    },
  },
};
</script>

<style></style>
