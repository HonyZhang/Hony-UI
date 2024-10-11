import HonyButton from './components/HonyButton.vue';
import HonyInput from './components/HonyInput.vue';
import { App } from 'vue';

const components = [HonyButton, HonyInput];

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

export {
    HonyButton,
    HonyInput,
}