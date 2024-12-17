import { createApp } from 'vue';
import App from './App.vue';
import { HonyButton } from 'hony-ui';
import 'hony-ui/components/hony-button/style';

const app = createApp(App);

app.use(HonyButton);

app.mount('#app');
