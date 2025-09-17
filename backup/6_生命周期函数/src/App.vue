<script lang="ts" setup>
import { ref } from 'vue';
import Person from './components/Person.vue'
import { type PersonInter, type Persons } from '@/types';
let isShow = ref(true)
</script>

<template>
    <Person v-if="isShow"> </Person>
</template>

<style scoped></style>
