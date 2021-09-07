<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';
import { Toast, Notify } from 'vant';

export default {
  props: ['code', 'state'],
  data() {
    return {
      userName: '',
      password: '',
      isShwoLoading: false,
      authData: {},
    };
  },

  methods: {
    // 根据传回的code请求access_token
    getTokenByCode() {
      let data = {
        client_id:
          'c4b2121053f8e29870127a237c6f797ae26a5e7cb61e237599b038f44aec10a3',
        client_secret:
          'ae5796ef2c70fe4eb9fe499d0235660cbcfecbfbc74e03f12420516f4ba91f86',
        code: this.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://127.0.0.1:3000',
        code_verifier: 'CODE_VERIFIER',
      };
      axios.post('auth/oauth/token', data).then((res) => {
        console.log('res=>', res);
        this.authData = res.data;
      });

      // axios
      //   .get(
      //     'auth/api/v4/projects?access_token=1c253ffa6e3b9ee6ce78d5cbecc8edf0a458bd986267aad503ac65fa07789ab0'
      //   )
      //   .then((res) => {
      //     console.log('res=>', res);
      //   });
    },
    // 获取授权数据
    getAuthData() {
      console.log(`code : ${this.code} state : ${this.state}`);
    },
    // 跳转授权登录页面
    authLogin() {
      console.log('跳转到授权登录页面');
      window.location.href =
        'http://gitlab.eduapps.cn/oauth/authorize?client_id=c4b2121053f8e29870127a237c6f797ae26a5e7cb61e237599b038f44aec10a3&redirect_uri=http://127.0.0.1:3000&response_type=code&state=state';
    },

    // 跳转到注册页面
    register() {
      Toast('跳转注册页面');
    },

    // 验证用户名密码 发送登录请求
    verifyNamePassword() {
      this.isShwoLoading = true;
      // let toast.message =
      if (this.userName && this.password) {
        if (this.userName === 'admin' && this.password === '123') {
          setTimeout(() => {
            window.localStorage.setItem('token', '9527');
            this.isShwoLoading = false;
            Notify({ type: 'success', message: '登录成功' });
            this.$router.push({
              name: 'home',
              params: { userName: '超爷' },
            });
          }, 2000);
        } else {
          this.isShwoLoading = false;
          Notify({ type: 'danger', message: '用户名或密码错误!!!' });
        }
      } else {
        // Toast('请输入用户名密码!!!');
        this.isShwoLoading = false;
        Notify({ type: 'danger', message: '请输入用户名密码!!!' });
      }
    },
    onClickRight() {
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '需要这个功能么',
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          switch (second) {
            case 0:
              toast.message = '需要这个功能么?';
              break;
            case 1:
              toast.message = '这是一个动态Toast?';
              break;
            case 2:
              toast.message = '这是一个移动端项目?';
              break;
            default:
              break;
          }
          // toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
        }
      }, 1000);
      // Toast('需要服务器IP配置么');
    },
  },

  setup() {
    // const isShwoLoading = ref(false);
    // return { isShwoLoading };
  },
};
</script>

<template>
  <van-nav-bar
    title="登录页面"
    right-text="服务器地址配置"
    @click-right="onClickRight"
  />

  <van-cell-group inset id="input">
    <van-field
      v-model="userName"
      label="用户名"
      placeholder="请输入用户名(admin)"
    />
    <van-field v-model="password" label="密码" placeholder="请输入密码(123)" />
  </van-cell-group>

  <div id="btn">
    <van-button
      :loading="isShwoLoading"
      :disabled="!userName || !password"
      type="primary"
      block
      loading-text="加载中..."
      @click="verifyNamePassword()"
      >登录</van-button
    >
    <van-button
      @click="register()"
      style="margin-top: 12px"
      plain
      type="primary"
      block
      >注册</van-button
    >

    <van-button
      @click="authLogin()"
      style="margin-top: 12px"
      plain
      type="primary"
      block
      >授权登录</van-button
    >

    <van-button
      @click="getAuthData()"
      style="margin-top: 12px"
      plain
      type="primary"
      block
      >获取授权数据</van-button
    >

    <van-button
      @click="getTokenByCode()"
      style="margin-top: 12px"
      plain
      type="primary"
      block
      >根据code获取Token</van-button
    >

    <div>授权数据 :{{ `code : ${code} state : ${state}` }}</div>

    <div>access_token : {{ this.authData.access_token }}</div>
    <div>refresh_token : {{ this.authData.refresh_token }}</div>
    <div>scope : {{ this.authData.scope }}</div>
  </div>
</template>

<style>
#btn {
  margin: 24px 12px 12px 12px;
}
#input {
  margin-top: 20px;
}
</style>
