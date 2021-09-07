<script>
export default {
  data() {
    return {
      msg: 'content',
      // count: 1,
      rawHtml: '<span style="color: red">This should be red.</span>',
      isShow: true,
      url: 'https://www.baidu.com',
      eventName: 'click',
      firstName: 'Foo',
      lastName: 'Bar',
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      numbers: [0, 1, 2, 3, 4, 5, 6, 7],
    };
  },
  props: ['count'],
  methods: {
    changeMessage() {
      this.msg = '改变后的数据';
      this.firstName = '嘿嘿嘿';
    },
    changeData(numbers) {
      return numbers.filter((x) => x % 2 === 0);
    },
  },
  computed: {
    evenNumbers: {
      get() {
        // slice & filter 不会触发变更检测
        // return this.numbers.slice(1, 5);
        return this.numbers.filter((x) => {
          return x !== 2;
        });
      },
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>

<template>
  <h1 style="color: red">TodoItem</h1>
  <template id="todo-list-example"></template>
  <ul>
    <template v-for="item in changeData(numbers)" :key="item">
      <li>{{ item }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>

  <div>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </div>
  <div>
    <li v-for="n in changeData(numbers)" :key="n">{{ n }}</li>
  </div>
  <div>
    <ul>
      <li v-for="(value, key, index) of myObject" :key="key">
        {{ index }} : {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
  <div>fullName:{{ fullName }}</div>
  <li>TODOITEM : {{ count }}</li>
  <div>
    <span v-once>使用v-once Message : {{ msg }}</span> <br />
    <span>Message : {{ msg }}</span>
  </div>
  <button v-on:click="changeMessage()">改变Message数据</button>

  <div id="example1" class="demo">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>

  <div v-if="isShow" v-on:click="isShow = !isShow">isShow</div>
  <a v-bind:href="url">百度</a>
  <br />
  <button v-on:[eventName]="changeMessage()">v-on:动态添加时间名称</button>
  <button @[eventName]="changeMessage()">@动态添加时间名称</button>
</template>
<style>
div {
  margin: 12px;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
