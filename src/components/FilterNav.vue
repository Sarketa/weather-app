<template>
  <div class="filter-nav">
    <router-link :to="{ name: 'Rio' }">Rio de Janeiro</router-link>
    <router-link :to="{ name: 'Beijing' }">Beijing</router-link>
    <router-link :to="{ name: 'LosAngeles' }">Los Angeles</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.filter-nav {
  padding-bottom: 4%;
}
.filter-nav a {
  text-decoration: none;
  background: none;
  border: none;
  color: black;
  font-size: 14px;
  outline: none;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
}
.filter-nav a:hover {
  color: red;
}
.filter-nav .router-link-active {
  border-bottom: 1px solid red;
}
</style>
