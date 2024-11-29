import type {
  ComponentResolver,
  ComponentResolveResult,
} from 'unplugin-vue-components';

// 将 kebab-case 格式的字符串转换为 PascalCase 格式
const toPascalCase = (kebabCaseName: string) =>
  kebabCaseName.replace(/-(\w)/g, (match, p1) => p1.toUpperCase());

// 将 kebab-case 格式的字符串转换为 camelCase 格式，如果不是则直接返回原字符串
const toCamelCaseIfKebabCase = (name: string) => {
  // 如果是 kebab-case 格式 (带有短横线的命名)
  if (name.includes('-')) {
    return name
      .replace(/-(\w)/g, (_, letter) => letter.toUpperCase()) // 将短横线后的字母转换为大写
      .replace(/^\w/, firstLetter => firstLetter.toLowerCase()); // 将第一个字母转换为小写
  }

  // 如果是 PascalCase 格式 (大驼峰命名)
  if (/^[A-Z]/.test(name)) {
    return name.replace(/^[A-Z]/, firstLetter => firstLetter.toLowerCase()); // 将第一个字母变为小写
  }

  // 否则，直接返回原始字符串
  return name;
};

// 将 PascalCase 格式的字符串转换为 kebab-case 格式，如果不是则直接返回原字符串
const toKebabCaseIfPascalCase = (name: string) => {
  // 判断是否为 PascalCase 格式（以大写字母开头）
  if (/^[A-Z]/.test(name)) {
    return name
      .replace(/([a-z])([A-Z])/g, '$1-$2') // 小写字母后紧跟大写字母时加短横线
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // 连续大写后接小写时加短横线
      .toLowerCase(); // 转为小写
  }

  // 如果不是 PascalCase，直接返回原字符串
  return name;
};

// HonyUIResolver 函数，用于解析 Hony 组件
export const HonyUIResolver = (): ComponentResolver => ({
  type: 'component',
  resolve: (name: string): ComponentResolveResult | null => {
    let ComponentName = name;
    // 处理以 Hony 开头的组件，例如 HonyButton -> hony-button
    if (name.startsWith('hony-')) {
      ComponentName = toPascalCase(name);
      return {
        name: ComponentName,
        from: `hony-ui`,
        sideEffects: `hony-ui/es/components/${name}/style/css.ts`,
      };
    }
    if (name.startsWith('Hony')) {
      return {
        name: ComponentName,
        from: `hony-ui`,
        sideEffects: `hony-ui/es/components/${toKebabCaseIfPascalCase(name)}/style/css.ts`,
      };
    }
    return null;
  },
});
