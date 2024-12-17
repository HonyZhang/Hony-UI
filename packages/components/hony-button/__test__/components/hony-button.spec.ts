import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HonyButton from '../../src/button.vue';

describe('HonyButton (Component Test)', () => {
  it('默认渲染基础类名 .hony-button', () => {
    const wrapper = mount(HonyButton);
    expect(wrapper.classes()).toContain('hony-button');
  });

  it('在非 disabled、非 loading 状态下点击可触发 click 事件', async () => {
    const wrapper = mount(HonyButton, {
      props: {
        disabled: false,
        loading: false,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('disabled 状态下点击不触发事件', async () => {
    const wrapper = mount(HonyButton, {
      props: { disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('loading 状态下点击不触发事件', async () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('默认情况下 icon 在左侧，文本在其后面', () => {
    const wrapper = mount(HonyButton, {
      props: { icon: 'hony-icon-test' },
      slots: { default: 'Button Text' },
    });
    const html = wrapper.html();
    const iconPos = html.indexOf('hony-icon-test');
    const textPos = html.indexOf('Button Text');
    expect(iconPos).toBeLessThan(textPos);
  });

  it('当 iconPosition 为 right 时，icon 应在文本后面', () => {
    const wrapper = mount(HonyButton, {
      props: {
        icon: 'hony-icon-test',
        iconPosition: 'right',
      },
      slots: { default: 'Button Text' },
    });
    const html = wrapper.html();
    const iconPos = html.indexOf('hony-icon-test');
    const textPos = html.indexOf('Button Text');
    expect(iconPos).toBeGreaterThan(textPos);
  });

  it('loading 状态下未提供 slot 时显示默认 loading 图标', () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
    });
    // 默认图标类名 hony-icon-loading-line
    expect(wrapper.find('.hony-icon-loading-line').exists()).toBe(true);
  });

  it('非 loading 状态下不显示 loading 图标和 loading slot', () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
    });
    // 默认图标类名 hony-icon-loading-line
    expect(wrapper.find('.hony-icon-loading-line').exists()).toBe(true);
  });

  it('loading 状态下若提供 loading slot 优先显示该 slot 内容', () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
      slots: {
        loading: '<span class="custom-loading">Loading...</span>',
      },
    });
    expect(wrapper.find('.custom-loading').exists()).toBe(true);
  });

  it('loading 状态下若提供 icon slot 优先显示该 slot 内容', () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
      slots: {
        icon: '<span class="custom-icon">icon...</span>',
      },
    });
    expect(wrapper.find('.custom-icon').exists()).toBe(true);
  });

  it('loading 状态下若提供 loading slot和 icon slot 优先显示 loading slot 内容', () => {
    const wrapper = mount(HonyButton, {
      props: { loading: true },
      slots: {
        loading: '<span class="custom-loading">Loading...</span>',
        icon: '<span class="custom-icon">icon...</span>',
      },
    });
    expect(wrapper.find('.custom-loading').exists()).toBe(true);
    expect(wrapper.find('.custom-icon').exists()).toBe(false);
  });

  it('非 loading 状态下，若未定义 icon 且无 icon slot，应显示默认图标', () => {
    const wrapper = mount(HonyButton, {
      slots: { default: 'No icon provided' },
    });
    // 当未定义 icon 时仍然有默认图标 hony-icon-loading-line
    expect(wrapper.find('.iconfont').exists()).toBe(false);
  });
});
