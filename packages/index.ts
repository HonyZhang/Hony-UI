import { HonyButton } from './components/hony-button';

import { HonyInput } from './components/hony-input';

import { HonyHorizontalScroll } from './components/hony-horizontal-scroll';
import type { App } from 'vue';

export { HonyUIResolver } from './utils/hony-ui-resolver';

const components = [HonyButton, HonyInput, HonyHorizontalScroll];

export const install = (app: App) => {
  components.forEach(component => {
    component.install!(app);
  });

  // 创建 link 元素
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './themes/default/fonts'; // 外链地址

  // 将 link 元素添加到 head
  document.head.appendChild(link);
};

export { HonyButton, HonyInput, HonyHorizontalScroll };
