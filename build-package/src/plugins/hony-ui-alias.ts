import type { Plugin } from 'rollup';

const STYLES_PREFIX = '@hony-ui/styles';
const STYLES_NAME = 'hony-ui/styles';

const ASSETS_PREFIX = '@hony-ui/assets';
const ASSETS_NAME = 'hony-ui/assets';

const ROOT_PREFIX = '@hony-ui';
const ROOT_NAME = 'hony-ui/es';

export function HonyUIAlias(): Plugin {
  // const themeDefault = 'theme-default';
  // const sourceThemeDefault = `${PKG_PREFIX}/styles/${themeDefault}` as const;
  // const bundleThemeDefault = `${PKG_NAME}/${themeDefault}` as const;

  return {
    name: 'hony-ui-alias-plugin',
    resolveId(id) {
      if (id.startsWith(STYLES_PREFIX)) {
        return {
          id: id.replaceAll(STYLES_PREFIX, STYLES_NAME),
          external: 'absolute',
        };
      }
      if (id.startsWith(ASSETS_PREFIX)) {
        return {
          id: id.replaceAll(ASSETS_PREFIX, ASSETS_NAME),
          external: 'absolute',
        };
      }
      if (id.startsWith(ROOT_PREFIX)) {
        return {
          id: id.replaceAll(ROOT_PREFIX, ROOT_NAME),
          external: 'absolute',
        };
      }
      return null;
    },
  };
}
