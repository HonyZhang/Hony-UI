import { createApp } from 'vue';
import App from './App.vue';
import { HonyButton } from 'hony-ui';

const app = createApp(App);

app.use(HonyButton);

app.mount('#app');
