<template>
  <div class="person">
    <h2>狗狗</h2>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="">
  </div>
  <button @click="getDog">再来一只🐶</button>
</template>



<script lang="ts" setup nam="Person">
import useDog from '@/hooks/useDog';

const {dogList,getDog} = useDog()

</script>


<style scoped>
img {
  height: 200px;
}

button {
  margin: 0 5px;
}

.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}



</style> 