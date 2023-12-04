/// <reference types="vite/client" />

//* 声明 .vue 组件的类型，以便于 ts 进行解析
declare module '*.vue' {
    import { defineComponent } from 'vue';

    const component: defineComponent;
    export default component;
}
