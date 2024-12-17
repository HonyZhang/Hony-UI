import { describe, it, expect } from 'vitest';
import { generateIconClasses } from '../../src/icon-classes';
import type { UseNamespaceReturn } from '@hony-ui/hooks';

// 使用简单的模拟函数来模拟 ns 和 iconNs 的返回结果
const nsMock = {
  b: () => 'hony-button',
  m: (modifier?: string) => (modifier ? `hony-button--${modifier}` : ''),
  is: (name: string, state: boolean = true) => (state ? `is-${name}` : ''),
} as unknown as UseNamespaceReturn;

const iconNsMock = {
  b: () => 'iconfont',
  m: (modifier?: string) => (modifier ? `iconfont--${modifier}` : ''),
  is: (name: string, state: boolean = true) => (state ? `is-${name}` : ''),
} as unknown as UseNamespaceReturn;

describe('generateIconClasses (Unit Test)', () => {
  it('在非 loading 状态下使用默认图标类', () => {
    const classes = generateIconClasses(
      { ns: nsMock, iconNs: iconNsMock },
      false
    );
    expect(classes).toEqual([
      'iconfont',
      'iconfont--left',
      'hony-icon-loading-line',
    ]);
  });

  it('在 loading 状态下使用 loading 标识和默认 loading 图标', () => {
    const classes = generateIconClasses(
      { ns: nsMock, iconNs: iconNsMock },
      true
    );
    expect(classes).toContain('is-loading');
    expect(classes).toContain('hony-icon-loading-line');
  });

  it('传入 icon 时（非 loading），应使用该 icon', () => {
    const classes = generateIconClasses(
      { ns: nsMock, iconNs: iconNsMock },
      false,
      { icon: 'hony-icon-test' }
    );
    expect(classes).toContain('hony-icon-test');
    expect(classes).not.toContain('hony-icon-loading-line');
  });

  it('position 为 right 时，class 中应包含 iconfont--right', () => {
    const classes = generateIconClasses(
      { ns: nsMock, iconNs: iconNsMock },
      false,
      { position: 'right' }
    );
    expect(classes).toContain('iconfont--right');
  });

  it('在 loading 状态下若传入 loadingIcon，应优先使用 loadingIcon', () => {
    const classes = generateIconClasses(
      { ns: nsMock, iconNs: iconNsMock },
      true,
      { loadingIcon: 'hony-icon-custom-loading' }
    );
    expect(classes).toContain('is-loading');
    expect(classes).toContain('hony-icon-custom-loading');
  });
});
