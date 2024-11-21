import type {Plugin} from 'rollup';

const PKG_PREFIX = '@hony-ui'
const PKG_NAME = 'hony-ui'

export function HonyUIAlias(): Plugin {
    const themeDefault = 'theme-default'
    const sourceThemeDefault = `${PKG_PREFIX}/${themeDefault}` as const
    const bundleThemeDefault = `${PKG_NAME}/${themeDefault}` as const

    return {
        name: 'element-plus-alias-plugin',
        resolveId(id) {
            if (!id.startsWith(sourceThemeDefault)) return
            return {
                id: id.replaceAll(sourceThemeDefault, bundleThemeDefault),
                external: 'absolute'
            }
        }
    }
}