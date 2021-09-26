import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />,
  size: 'small'
}

export const AsLink: Story = (args) => <Button {...args} />

AsLink.args = {
  children: 'Buy now',
  size: 'large',
  as: 'a',
  href: '/link'
}
