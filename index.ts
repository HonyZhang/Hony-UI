import MyButton from './components/MyButton.vue';
import MyInput from './components/MyInput.vue';
import { App } from 'vue';

const components = [MyButton, MyInput];

const install = (app: App) => {
    components.forEach((component) => {
        if (!component.name) {
            console.warn(`Component name is undefined for ${component.component}`);
        } else {
            app.component(component.name, component);
        }
    });
};

const HonyUI = {
    install,
};

export default HonyUI;