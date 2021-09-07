<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
// import TodoItem from './components/TodoItem.vue';
import FirstComponent from './components/FirstComponent/FirstComponent.vue';
import MyApp from './components/MyApp.vue';
import TodoItem from './components/TodoItem.vue';
import { Button } from 'vant';
</script>

<template>
  <van-cell-group inset>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>

  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <TodoItem /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <MyApp />
  <FirstComponent />

  <div>
    <div id="todo-list-app">
      <ol>
        <div>
          <TodoItem />
        </div>
      </ol>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
