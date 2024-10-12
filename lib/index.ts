import HonyButton from './components/HonyButton.vue';
import HonyInput from './components/HonyInput.vue';
import HonyHorizontalScroll from './components/HonyHorizontalScroll.vue';
import {App} from 'vue';

const components = [HonyButton, HonyInput, HonyHorizontalScroll];

const install = (app: App) => {
    components.forEach((component) => {
        if (!component.name) {
            console.warn(`Component name is undefined for ${component.component}`);
        } else {
            app.component(component.name, component);
        }
    });

    // 创建 link 元素
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './styles/fonts';  // 外链地址

    // 将 link 元素添加到 head
    document.head.appendChild(link);
};

const HonyUI = {
    install
};

export default HonyUI;

export {
    HonyButton,
    HonyInput,
    HonyHorizontalScroll
}