import MyButton from './components/HonyButton.vue'
import MyInput from './components/HonyInput.vue'
import HonyHorizontalScroll from './components/HonyHorizontalScroll.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        MyButton: typeof MyButton
        MyInput: typeof MyInput
        HonyHorizontalScroll: typeof HonyHorizontalScroll
    }
}
