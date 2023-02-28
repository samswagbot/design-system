import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default text',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

export const Success = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary button',
};

Success.args = {
  variant: 'success',
  children: 'Success!',
};