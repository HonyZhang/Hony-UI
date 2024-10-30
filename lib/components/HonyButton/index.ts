import HonyButton from './src/index.vue';
import {type App} from '@vue/runtime-core'

const install = (app: App): void => {
    app.component(HonyButton.name!, HonyButton);
};

export default {
    install
};