import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';
import '../components/hony-button/style';
import '@hony-ui/assets/iconfont/iconfont.css';
import { HonyButton } from '@hony-ui/components/hony-button';

type ButtonPropsAndCustomArgs = ComponentProps<typeof HonyButton> & {
  label?: string;
};

const meta: Meta<ButtonPropsAndCustomArgs> = {
  title: 'Components/HonyButton',
  component: HonyButton,
};

export default meta;

type Story = StoryObj<ButtonPropsAndCustomArgs>;

export const Default: Story = {
  render: args => ({
    components: { HonyButton },
    setup() {
      return { args };
    },
    template: `
      <HonyButton v-bind="args">
        {{ args.label }}
      </HonyButton>
    `,
  }),
  args: {
    label: 'Buttonaaa',
    size: 'default',
    type: 'default',
    icon: 'hony-icon-loading-line',
  },
};
