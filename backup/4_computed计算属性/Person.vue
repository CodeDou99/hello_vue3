<template>
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>汽车品牌:{{ car.brand }}</h2>
    <h2>汽车价格:{{ car.price }}万</h2>
    <button @click="showTel">点击查看Tel</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCarBrand">修改汽车品牌</button>
    <button @click="changeCarPrice">修改汽车价格</button>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" v-bind:key='g.id'>{{ g.name }}</li>
    </ul>
    <button @click="changeGame1">修改Game1</button>
    <br>
    <br>
    姓:<input type="text" v-model="lastName"> <br>
    名: <input type="text" v-model="firstName"> <br>
    姓名: {{ fullName }}
    <button @click="changeFullName">修改姓名</button>
  </div>

  <div>

  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'

let lastName = ref('zhang')
let firstName = ref('san')

let fullName = computed({
  get() {
    return lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1) + '-' + firstName.value
  },
  set(changedFullName) {
    const [str1, str2] = changedFullName.split('-')
    firstName.value = str2
    lastName.value = str1
  }
})
function changeFullName() {
  fullName.value = 'li-si'
}

let games = ref([{ id: 1, name: '王者荣耀' }, { id: 2, name: 'DNF' }, { id: 3, name: 'CF' }])
function changeGame1() {
  games.value[0].name = '王者荣耀-不玩了'
}

let name = ref('张三')
let age = ref(26)
let tel = '15707201991'

// let car = reactive({brand:'BYD',price:14.35})
let car = { brand: ref('BYD'), price: ref(14.35) }

function changeCarBrand() {
  car.brand.value = 'BMW'
  console.log(car.brand);

}
function changeCarPrice() {
  car.price.value += 1;
  console.log(car)
}
function changeName() {
  name.value = 'zhangsan'
}
function changeAge() {
  age.value += 1
}
function showTel() {
  alert(tel)
}
</script>
<style>
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