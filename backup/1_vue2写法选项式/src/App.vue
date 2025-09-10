<script lang="ts">
import Person from './components/Person.vue'
export default {
  name: 'App',
  components: { Person }
}
</script>

<template>
  <div class="app">
    <h1>你好</h1>
    <Person />
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0, 0, 20px;
  border-radius: 20px;
  padding: 20px;
}
</style>
