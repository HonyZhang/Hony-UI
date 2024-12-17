import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

const resolvePath = (relativePath: string) =>
  new URL(relativePath, import.meta.url).href;

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }

    if (!app.config.globalProperties.$iconfontLoaded) {
      import('@hony-ui/assets/iconfont/iconfont.css');
      app.config.globalProperties.$iconfontLoaded = true;
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  // // 判断是否存在id为honyIconfont的link元素
  // const link = document.getElementById('honyIconfont');
  // if (!link) {
  //   // 创建 link 元素
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.id = 'honyIconfont';
  //   link.href = resolvePath('@hony-ui/assets/iconfont/iconfont.css'); // 外链地址
  //
  //   // 将 link 元素添加到 head
  //   document.head.appendChild(link);
  // }
  return main as SFCWithInstall<T> & E;
};
