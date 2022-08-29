<script setup>
import {ref} from "vue";
import axios from "axios";

const content = ref('hello electron')

function click() {
  axios({
    url: '/',
    method: 'get'
  }).then((resp) => {
    content.value = resp.data['detail']
  })
}
</script>

<template>
  <a-button type="primary" @click="click">click me</a-button>
  <a-typography-paragraph>{{ content }}</a-typography-paragraph>
</template>

