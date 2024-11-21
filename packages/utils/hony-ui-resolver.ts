import type {ComponentResolver, ComponentResolveResult} from "unplugin-vue-components";

const toPascalCase = (kebabCaseName: string) =>
    kebabCaseName.replace(/-(\w)/g, (match, p1) => p1.toUpperCase());

const toCamelCase = (name: string) => {
    // 如果是 kebab-case 格式 (带有短横线的命名)
    if (name.includes("-")) {
        return name
            .replace(/-(\w)/g, (_, letter) => letter.toUpperCase()) // 将短横线后的字母转换为大写
            .replace(/^\w/, (firstLetter) => firstLetter.toLowerCase()); // 将第一个字母转换为小写
    }

    // 如果是 PascalCase 格式 (大驼峰命名)
    if (/^[A-Z]/.test(name)) {
        return name.replace(/^[A-Z]/, (firstLetter) => firstLetter.toLowerCase()); // 将第一个字母变为小写
    }

    // 否则，直接返回原始字符串
    return name;
};

export const HonyUIResolver = (): ComponentResolver => ({
    type: "component",
    resolve: (name: string): ComponentResolveResult => {
        let ComponentName = name;
        // 处理以 Hony 开头的组件，例如 HonyButton -> hony-button
        if (name.startsWith("hony-")) {
            ComponentName = toPascalCase(name);
            return {
                name: ComponentName,
                from: `hony-ui`
            };
        }
        if (name.startsWith("Hony")) {
            return {
                name: ComponentName,
                from: `hony-ui`
            };
        }
        return null;
    }
});