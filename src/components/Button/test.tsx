import { render, screen } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium sized button by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 0',
      'font-size': '1.4rem'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'padding',
      '0.8rem 3.2rem',
      {
        media: '(min-width: 768px)'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small sized button', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large sized button by default', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 0',
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'padding',
      '0.8rem 4.8rem',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render a full width version', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a version with an icon', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render button as a link', () => {
    const { debug, container } = render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
