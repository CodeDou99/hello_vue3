<template>
  <div class="person">
    <h2 ref="title2">Test</h2>
    <button @click="showTitle2">showTitle2</button>
  </div>
</template>



<script lang="ts" setup nam="Person">

import { ref } from 'vue'

let title2 = ref()

// console.log('aaa')
function showTitle2(){
  console.log(title2.value)
}

document.addEventListener('DOMContentLoaded', function () {
  // DOM 已经就绪，可以安全操作元素
  console.log('DOM ready');
  console.log(title2.value)
});

window.onload = function () {
  console.log('Page fully loaded');
  console.log(title2.value)
};

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