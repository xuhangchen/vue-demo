#### UI 组件库

- [vant](https://gitee.com/vant-contrib/vant/) vue 移动端组件库
- [vue3.0](https://v3.cn.vuejs.org/)
- [vue-router](https://router.vuejs.org/zh/) 路由文档

#### 模拟数据

1. 安装 json-serve npm install -g json-serve
2. 创建模拟数据 json 文件
3. json-server --watch --port 端口号 mockdata 文件

#### 项目结构

```
├── README.md
├── babel.config.js                         // 语法支持
├── index.html                              // 入口Html
├── package-lock.json
├── package.json                            // 依赖脚本配置文件
├── public
│   └── favicon.ico
├── src                                     // 代码目录
│   ├── App.vue                             // 入口组件
│   ├── assets                              // 资源文件
│   │   ├── db.json                         // Mock数据
│   │   └── logo.png
│   ├── main.js                             // 入口Js
│   ├── pages                               // 页面
│   │   ├── Home.vue                        // 主页
│   │   ├── Login.vue                       // 登录页
│   │   ├── My.vue                          // 个人中心
│   │   └── ServeConfig.vue                 // 服务配置页面
│   └── router.js                           // 路由配置
└── vite.config.js                          // 编译打包配置
```

#### 启动

- npm install
- npm start | npm run dev
