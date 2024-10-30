import HonyHorizontalScroll from './src/index.vue';
import {type App} from 'vue'

const install = function (app: App) {
    app.component(HonyHorizontalScroll.name!, HonyHorizontalScroll);
}

export default {
    install
};