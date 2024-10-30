import HonyHorizontalScroll from './src/index.vue';
import type {App, Plugin} from 'vue'

HonyHorizontalScroll.install = function (app: App) {
    app.component(HonyHorizontalScroll.name!, HonyHorizontalScroll);
}

export default HonyHorizontalScroll as typeof HonyHorizontalScroll & Plugin