<script lang="ts" setup>
import Person from './components/Person.vue'
import { reactive } from 'vue';
import { type PersonInter, type Persons } from '@/types';

let personList = reactive<Persons>([{ id: 'zsfsafad', name: 'zhangsan', age: 18 },
    { id: '2345', name: 'lisi', age: 18 },
    { id: '1234', name: '王五', age: 18,x:'可选择的' }
])
// console.log(personList);


</script>

<template>
    <Person :list="personList" />
</template>

<style scoped></style>
