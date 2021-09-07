import { createApp } from 'vue';

import {
  NavBar,
  Button,
  Tab,
  Tabs,
  Field,
  CellGroup,
  Grid,
  GridItem,
  List,
  Card,
  Tag,
  Form,
  Switch,
  Popup,
  Picker,
  Cell,
  Toast,
  Notify,
  Sticky,
} from 'vant';

const components = [
  Popup,
  Button,
  Field,
  CellGroup,
  NavBar,
  Tab,
  Tabs,
  Grid,
  GridItem,
  List,
  Card,
  Tag,
  Form,
  Switch,
  Picker,
  Cell,
  Toast,
  Notify,
  Sticky,
];

import { router } from './router';
console.log('routes');

const app = createApp({});
components.forEach((item) => {
  app.use(item);
});

app.use(router);
app.mount('#root');
