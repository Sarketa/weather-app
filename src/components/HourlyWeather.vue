<template>
  <div class="hourly-temp" v-for="(time, index) in filterdList" :key="index">
    <HourlyTemp :time="time" />
  </div>
</template>

<script>
import HourlyTemp from "./HourlyTemp.vue";
export default {
  namme: "HourlyWeathers",
  props: ["hourly"],
  components: { HourlyTemp },
  computed: {
    filterdList() {
      return this.hourly;
    },
  },
};
</script>

<style></style>
