<script>
import TodoItem from './TodoItem.vue';
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      count: 0,
      title: 'First Title',
      dataList: [
        {
          name: '第一条数据',
          id: '1',
        },
        {
          name: '第三条数据',
          id: '3',
        },
        {
          name: '第二条数据',
          id: '2',
        },
        {
          name: '第四条数据',
          id: '4',
        },
      ],
      heihei: 0,
    };
  },
  methods: {
    jiayi() {
      this.count++;
    },
  },
  computed: {
    jiaer: {
      get() {
        return this.count + 2;
      },

      set(num) {
        this.heihei = num;
      },
    },
  },
};

console.log('MyFirstVueComponent!!!');
</script>

<template>
  <TodoItem />
  <h1 style="color: red">MyApp</h1>
  <div id="myapp">
    <div>MyFirstVueComponent</div>
    <div>Title: {{ title }}</div>

    <ul>
      <li v-for="item in dataList">
        <span>{{ item.name }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>

    <div>count: {{ count }}</div>
    <div>count+2: {{ jiaer }}</div>
    <div>count+2: {{ heihei }}</div>
    <button v-on:click="count++">点击+1</button>
    <button v-on:click="jiaer = 10">jiaer 的set方法</button>
  </div>
</template>

<style>
#myapp {
  background: gray;
  margin: 20px;
}
</style>
