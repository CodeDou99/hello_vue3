<template>
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="showTel">点击查看Tel</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '15707201991'
    }
  },
  methods: {
    showTel() {
      alert(this.tel)
    },
    changeName() {
      this.name = 'zhangsan'
    },
    changeAge() {
      this.age +=1
    }
  }
}  
</script>
<style>
  button{
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