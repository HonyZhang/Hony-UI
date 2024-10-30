import HonyButton from './components/HonyButton/index.js';
import HonyInput from './components/HonyInput/index.js';
import HonyHorizontalScroll from './components/HonyHorizontalScroll/index.js';
import {HonyUIResolver} from './utils/HonyUIResolver';
import {type App} from 'vue';

const components = [HonyButton, HonyInput, HonyHorizontalScroll];

const install = (app: App) => {
    components.forEach((component) => {
        app.use(component);
    });

    // 创建 link 元素
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './styles/fonts';  // 外链地址

    // 将 link 元素添加到 head
    document.head.appendChild(link);
};

export default {
    install
};

export {
    HonyButton,
    HonyInput,
    HonyHorizontalScroll,
    HonyUIResolver
}