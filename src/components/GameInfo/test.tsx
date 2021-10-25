import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'Game title',
  description: 'Game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game info', () => {
    const { container } = render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<GameInfo {...props} />)

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
    render(<GameInfo {...props} price={0} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })
})
