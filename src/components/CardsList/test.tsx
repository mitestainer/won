import { render, screen } from 'utils/test-utils'

import CardsList from '.'
import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/cards/mastercard.png'
    )

    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/4321/)).toBeInTheDocument()
  })
})
