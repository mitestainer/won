import { Story, Meta } from '@storybook/react'
import CartList from '.'
import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList />
  </div>
)
