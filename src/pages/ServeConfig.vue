<script>
import { ref } from 'vue';
export default {
  data() {
    return {};
  },
  methods: {
    showPopup() {
      console.log('为什么不显示?  WTF?');
      this.show = true;
    },
  },
  setup() {
    const projectName = ref('');
    const params1 = ref('');
    const checked = ref(false);

    //  分支选择器配置
    const result = ref('');
    let showPicker = ref(false);
    const columns = ['Dev', 'Prod', 'Test', 'Dev2'];

    const onConfirm = (value) => {
      result.value = value;
      showPicker.value = false;
    };

    return {
      checked,
      result,
      columns,
      onConfirm,
      showPicker,
      projectName,
      params1,
    };
  },
};
</script>

<template>
  <van-nav-bar
    title="服务配置"
    left-text="返回"
    left-arrow
    @click-left="this.$router.back()"
  />

  <van-form>
    <van-field
      v-model="projectName"
      name="项目名称"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写项目名称' }]"
    />
    <van-field
      v-model="params1"
      name="构建参数1"
      label="构建参数1"
      placeholder="构建参数1"
      :rules="[{ required: true, message: '请填写构建参数1' }]"
    />

    <van-field name="switch" label="生产/开发">
      <template #input>
        <van-switch v-model="checked" size="20" />
      </template>
    </van-field>

    <van-field
      v-model="result"
      is-link
      readonly
      name="picker"
      label="分支选择器"
      placeholder="请选择分支"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <div id="btn">
      <van-button type="primary" block>开始构建</van-button>
      <van-button style="margin-top: 12px" plain type="primary" block
        >更改配置</van-button
      >
    </div>
  </van-form>
</template>

<style>
#btn {
  margin: 24px 12px 12px 12px;
}
#input {
  margin-top: 20px;
}
</style>
