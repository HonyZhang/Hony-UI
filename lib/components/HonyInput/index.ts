import HonyInput from './src/index.vue';
import {type App} from 'vue';

const install = function (app: App) {
    app.component(HonyInput.name!, HonyInput);
}

export default {
    install
};