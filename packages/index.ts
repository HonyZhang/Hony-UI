import { HonyButton } from './components/hony-button';

import { HonyInput } from './components/hony-input';

import { HonyHorizontalScroll } from './components/hony-horizontal-scroll';
import type { App } from 'vue';

export { HonyUIResolver } from './utils/hony-ui-resolver';

const components = [HonyButton, HonyInput, HonyHorizontalScroll];

const install = (app: App) => {
  components.forEach(component => {
    component.install!(app);
  });
};

export default {
  install,
};

export { HonyButton, HonyInput, HonyHorizontalScroll };
