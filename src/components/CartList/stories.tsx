import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
)
