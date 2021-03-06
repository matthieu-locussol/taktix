import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../components/Button';

export default {
   title: 'Components/Button',
   component: Button,
   argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => {
   return <Button {...args}>Button</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
   variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
   variant: 'secondary',
};

export const Big = Template.bind({});
Big.args = {
   size: 'big',
};

export const Tiny = Template.bind({});
Tiny.args = {
   size: 'tiny',
};
