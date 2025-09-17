<template>
  <div class="person">
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    
  </div>
</template>



<script lang="ts" setup nam="Person">

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'
  let sum = ref(0)
  function add(){
    sum.value+=1
  }

  console.log('创建')

  onBeforeMount(()=>{
    console.log('挂载前');
  })

  onMounted(()=>{
    console.log('挂载后');
  })

  onBeforeUpdate(()=>{
    console.log('更新前');
  })

  onUpdated(()=>{
    console.log('更新后');
  })

  onBeforeUnmount(()=>{
    console.log('卸载前');
  })
  onUnmounted(()=>{
    console.log('卸载后');
  })


</script>


<style scoped>
button {
  margin: 0 5px;
}

/* .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
} */
.person {
  background-color: #f0f8ff;
  /* 柔和的背景色 (爱丽丝蓝) */
  border-radius: 12px;
  /* 圆角 */
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  /* 初始阴影 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* 平滑过渡 */
  max-width: 300px;
  /* 限制宽度，避免太宽 */
  margin: 16px auto;
  /* 居中 */
}

.person:hover {
  transform: translateY(-1px);
  /* 悬浮时轻微上移 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  /* 增强阴影 */
}

.person h2 {
  margin-bottom: 12px;
  color: #333;
  font-size: 20px;
  border-bottom: 1px solid #ddd;
  /* 标题下划线 */
  padding-bottom: 8px;
}

.person p {
  margin: 6px 0;
  color: #555;
  font-size: 16px;
}
</style>