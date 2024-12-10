const CSS_VAR_PREFIX = '--hony-color';

export const getColorValue = (type: string) => {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    `${CSS_VAR_PREFIX}-${type}`
  );
  return color.trim() || 'Unknown Color'; // 提供默认值
};

// Copy color logic
export const useCopyColor = () => {
  const source = ref('');
  const { copy, isSupported } = useClipboard({ source });

  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error('useCopyColor must be called within a setup function');
  }

  const copyColor = async (colorType: string) => {
    const colorValue = getColorValue(colorType);
    if (!colorValue) {
      console.warn(`No color value found for type: ${colorType}`);
      return;
    }

    source.value = colorValue;
    const { $message } = vm.appContext.config.globalProperties;
    if (!isSupported) {
      $message?.error('Clipboard is not supported in this environment');
      return;
    }
    try {
      await copy();
      $message?.success(`${CSS_VAR_PREFIX}-${colorType}: ${source.value}`);
    } catch (e: any) {
      $message?.error(e.message || 'Failed to copy color');
    }
  };

  return {
    copyColor,
  };
};

export const isDark = useDark({
  storageKey: 'hony-theme-appearance',
});

export const toggleDark = useToggle(isDark);

export const getCssVarName = (namespace: string, type: string) => {
  return type ? `--hony-${namespace}-${type}` : `--hony-${namespace}`;
};

/**
 * get css var value by css var name
 * @param name
 * @returns
 */
export const getCssVarValue = (name: string) => {
  const val = ref(
    getComputedStyle(document.documentElement).getPropertyValue(name)
  );
  watch(
    () => isDark.value,
    () => {
      setTimeout(() => {
        val.value = getComputedStyle(document.documentElement).getPropertyValue(
          name
        );
      }, 100);
    }
  );
  return val;
};
