<template>
  <div class="hour">
    <!--geting hour data and convert it in to local string-->
    <span>{{
      new Date(this.time.dt * 1000).toLocaleString("en-us", {
        hour: "numeric",
        minute: "numeric",
      })
    }}</span>
  </div>
</template>

<script>
export default {
  name: "HourlyTemp",
  //* acepting prop time for geting hourly.dt time for special hour
  props: ["time"],
};
</script>

<style></style>
