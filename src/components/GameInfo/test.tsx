import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'Game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game info', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /add to wishlist/i
      })
    ).toBeInTheDocument()
  })

  it('should render the word FREE if price is 0', () => {
    renderWithTheme(<GameInfo {...props} price={0} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })
})
