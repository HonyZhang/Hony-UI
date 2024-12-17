// icon-classes.ts
import type { UseNamespaceReturn } from '@hony-ui/hooks';

interface Namespaces {
  ns: UseNamespaceReturn;
  iconNs: UseNamespaceReturn;
}

interface IconConfig {
  position?: 'left' | 'right';
  loadingIcon?: string;
  icon?: string;
}

export function generateIconClasses(
  { ns, iconNs }: Namespaces,
  isLoading: boolean,
  { position = 'left', loadingIcon, icon }: IconConfig = {}
) {
  const classes = [iconNs.b(), iconNs.m(position)];

  // 优先选定最终需要的图标类名
  const finalIconClass = loadingIcon || icon || 'hony-icon-loading-line';

  if (isLoading) {
    // loading 状态下添加 .is-loading 以及最终图标类名
    classes.push(ns.is('loading'), finalIconClass);
  } else {
    // 非 loading 状态下直接添加图标类名
    classes.push(finalIconClass);
  }

  return classes;
}
