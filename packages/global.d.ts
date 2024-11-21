declare module 'vue' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        HonyButton: typeof import('hony-ui')['HonyButton'],
        HonyInput: typeof import('hony-ui')['HonyInput'],
        HonyHorizontalScroll: typeof import('hony-ui')['HonyHorizontalScroll']
    }
}

export {}