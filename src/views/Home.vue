<template>
  <div>
    <h3>this is home</h3>
    <p>{{ $route.params.id}}</p>
    <!-- <p>{{ $route.query.name}}</p> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
