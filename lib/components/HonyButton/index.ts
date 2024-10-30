import HonyButton from './src/index.vue';
import type {App, Plugin} from 'vue';

HonyButton.install = (app: App): void => {
    app.component(HonyButton.name!, HonyButton);
};

export default HonyButton as typeof HonyButton & Plugin