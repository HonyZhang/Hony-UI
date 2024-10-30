import HonyInput from './src/index.vue';
import type {App, Plugin} from 'vue';

HonyInput.install = function (app: App) {
    app.component(HonyInput.name!, HonyInput);
}

export default HonyInput as typeof HonyInput & Plugin