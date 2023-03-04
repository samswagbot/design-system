import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, Props } from '../src/components/Tabs/Tabs';

const contents = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaporttitor accumsan tincidunt. Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
  },
  {
    content:
      'Praesent sapien massa, convallis a pellentesque nec, egestas nonisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.Praesent sapien massa, convallis a pellentesque nec, egestas nonnisi. Donec sollicitudin molestie malesuada.',
  },
  {
    content:
      'Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.',
  },
];

const tabs = [
  {
    label: 'Tab 1',
  },
  {
    label: 'Tab 2',
  },
  {
    label: 'Tab 3',
  },
];

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    // onClick: { action: 'clicked' },
    tabs: {
      defaultValue: tabs,
    },
    contents: {
      defaultValue: contents,
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Tabs {...args} />;

export const Default = Template.bind({});
