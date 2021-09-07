<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    getDataList() {
      axios
        .get('http://127.0.0.1:30001/datalist')
        .then((result) => {
          console.log(result);
          this.dataList = result.data;
        })
        .catch((err) => {
          console.log(ee);
        });
    },
  },
};
</script>
<template>
  <div>个人中心</div>
  <button @click="getDataList()">获取数据</button>
  <ui>
    <li v-for="item in dataList" :key="item.key">{{ item.name }}</li>
  </ui>
</template>

<style></style>
