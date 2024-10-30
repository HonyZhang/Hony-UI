import HonyButton from './components/HonyButton/src/index.vue'
import HonyInput from './components/HonyInput/src/index.vue'
import HonyHorizontalScroll from './components/HonyHorizontalScroll/src/index.vue'

declare module '@vue/runtime-core' {
    export default interface GlobalComponents {
        HonyButton: typeof HonyButton
        HonyInput: typeof HonyInput
        HonyHorizontalScroll: typeof HonyHorizontalScroll
    }
}