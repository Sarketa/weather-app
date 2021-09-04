<template>
  <div class="hour">
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
  props: ["time"],
};
</script>

<style></style>
