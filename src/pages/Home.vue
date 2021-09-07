<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  props: ['userName'],
  data() {
    return {
      tabList: [
        { name: '服务器一', id: '0001' },
        { name: '服务器二', id: '0002' },
        { name: '服务器三', id: '0003' },
        { name: '服务器四', id: '0004' },
        { name: '服务器五', id: '0005' },
        { name: '服务器六', id: '0006' },
        { name: '服务器七', id: '0007' },
      ],

      routeList: [
        { serveName: '服务状态', icon: 'bulb-o', url: '?' },
        { serveName: '部署', icon: 'fire-o', url: '?' },
        { serveName: '构建', icon: 'gift-o', url: '?' },
        { serveName: '编辑配置', icon: 'setting-o', url: '?' },
      ],
      showPop: false,
      counter: 1,
    };
  },

  methods: {
    onClickRight() {
      this.counter = this.counter + 1;
      this.showPop = true;
    },

    logout() {
      window.localStorage.clear();
      this.$router.push('/');
    },
  },

  watch: {
    counter(newValue, oldValue) {
      console.log(`oldValie : ${oldValue}  newValue : ${newValue}`);
      console.log('The new counter value is : ' + this.counter);
    },
  },

  setup() {
    let projectList = ref([]);

    //  配置选中tab
    const active = ref(2);

    // 配置ProjectList数据
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      axios
        .get('../auth/api/v4/projects', {
          params: {
            access_token: JSON.parse(window.localStorage.getItem('token'))
              .access_token,
          },
        })
        .then((res) => {
          projectList.value = res.data;
          console.log('data', res.data);
        });

      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        // for (let i = 0; i < 10; i++) {
        //   list.value.push(list.value.length + 1);
        // }

        list.value = [
          {
            name: '测试环境项目1',
            status: 'build',
            description: '简单的项目描述',
            id: '0001',
          },
          {
            name: '生产环境',
            status: 'error',
            description: '简单的项目描述',
            id: '0002',
          },
          {
            name: '构建失败项目',
            status: 'success',
            description: '简单的项目描述',
            id: '0003',
          },
          {
            name: 'warning项目',
            status: 'success',
            description: '简单的项目描述',
            id: '0004',
          },
          {
            name: '胸部',
            status: 'success',
            description: '简单的项目描述',
            id: '0005',
          },
          {
            name: '大肩膀',
            status: 'build',
            description: '简单的项目描述',
            id: '0006',
          },
          {
            name: '背部',
            status: 'dev',
            description: '简单的项目描述',
            id: '0007',
          },
          {
            name: '腿部',
            status: 'success',
            description: '简单的项目描述',
            id: '0008',
          },
          {
            name: '大胳膊',
            status: 'build',
            description: '简单的项目描述',
            id: '0009',
          },
          {
            name: '超爷大肌霸',
            status: 'build',
            description: '简单的项目描述',
            id: '0010',
          },
          {
            name: '蒋总大肌霸',
            status: 'build',
            description: '简单的项目描述',
            id: '0011',
          },
          {
            name: '杜总鸡巴大',
            status: 'success',
            description: '简单的项目描述',
            id: '0012',
          },
        ];

        // loading = false;

        if (list.value.length >= 12) {
          finished.value = true;
        }
      }, 1500);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading = true;
      onLoad();
    };

    return {
      projectList,
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
      active,
    };
  },
};
</script>

<template>
  <van-sticky>
    <van-nav-bar
      title="主页"
      :right-text="`${userName}设置`"
      @click-right="onClickRight"
    />
    <div style="background: white">
      <van-tabs
        title-active-color="skyblue"
        title-inactive-color="#2c3e50"
        v-model:active="active"
      >
        <van-tab v-for="item in tabList" :title="item.name" :key="item.id">
          <van-grid
            style="margin-top: 12px"
            :gutter="10"
            clickable
            :column-num="routeList.length"
          >
            <van-grid-item
              @click="this.$router.push('/config')"
              v-for="serve in routeList"
              :icon="serve.icon"
              :text="serve.serveName"
            />
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </van-sticky>

  <h5 style="margin-left: 12px; color: gray">项目列表</h5>

  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in projectList" :key="item.id">
      <van-card
        @click="this.$router.push('/config')"
        :desc="'描述信息:' + item.description"
        :title="item.name"
        thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.mamicode.com%2Finfo%2F201807%2F20180727001620900520.png&refer=http%3A%2F%2Fimage.mamicode.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633431533&t=1c0d5620b56353cca3141cc4c2de774d"
      >
        <template #footer>
          <!-- <van-tag
            :type="
              item.status === 'success'
                ? 'success'
                : item.status === 'build'
                ? 'primary'
                : 'danger'
            "
            >{{
              item.status === 'success'
                ? '构建成功'
                : item.status === 'build'
                ? '正在构建'
                : '构建失败'
            }}</van-tag
          > -->
        </template>
      </van-card>
    </van-cell>
  </van-list>

  <van-popup
    round
    position="bottom"
    v-model:show="showPop"
    :style="{ height: '30%' }"
  >
    <div style="margin: 50px 12px 12px 12px">
      <van-button
        @click="this.$router.push('/my')"
        block
        plain
        hairline
        type="primary"
        >个人中心</van-button
      >
      <van-button
        style="margin-top: 12px"
        block
        plain
        hairline
        type="warning"
        @click="logout"
        >登出</van-button
      >
    </div>
  </van-popup>
</template>

<style>
#btn {
  margin: 24px 12px 12px 12px;
}
#input {
  margin-top: 20px;
}

:root {
  --van-tabs-bottom-bar-color: skyblue;
  --van-tabs-card-height: 140px;
}
</style>
