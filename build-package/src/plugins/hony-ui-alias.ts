import type { Plugin } from 'rollup';

const PKG_PREFIX = '@hony-ui';
const PKG_NAME = 'hony-ui';

export function HonyUIAlias(): Plugin {
  // const themeDefault = 'theme-default';
  // const sourceThemeDefault = `${PKG_PREFIX}/styles/${themeDefault}` as const;
  // const bundleThemeDefault = `${PKG_NAME}/${themeDefault}` as const;

  return {
    name: 'hony-ui-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(PKG_PREFIX)) return;
      return {
        id: id.replaceAll(PKG_PREFIX, PKG_NAME),
        external: 'absolute',
      };
    },
  };
}
