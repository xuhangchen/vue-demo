<script>
import TodoItem from '../TodoItem.vue';
export default {
  data() {
    return {
      msg: 'Hello Vue!',
      message: 'Hello Vue.js!',
      messageBind: '双向数据绑定',
      isShow: true,
      todoList: [
        {
          name: '敲代码',
        },
        {
          name: '改服务',
        },
        {
          name: '部署',
        },
        {
          name: '测试',
        },
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },

    showTodo(item) {
      console.log(item.name);
    },
  },
};
</script>

<template>
  <h1 style="color: red">FirstItem</h1>
  <div id="example">
    <div @click="msg += '1'" class="example">{{ msg }}</div>

    <div id="event-handling">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">反转 Message</button>
    </div>

    <div id="two-way-binding">
      <p>{{ messageBind }}</p>
      <input v-model="messageBind" />
    </div>

    <div style="margin-top: 10px">
      <div v-if="isShow">显示/隐藏内容</div>
      <button v-on:click="isShow = !isShow">
        {{ isShow ? '隐藏' : '显示' }}元素
      </button>
    </div>

    <div>
      <ol>
        <li v-for="todo in todoList" v-on:click="showTodo(todo)">
          {{ todo.name }}
        </li>
      </ol>
    </div>

    <div></div>
  </div>
</template>

<style>
.example {
  color: red;
  background: red;
}
</style>
