import { fireEvent, screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  })

  it('should handle the open/close menu on mobile', () => {
    render(<Menu />)

    // selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    render(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    render(<Menu username="user" />)

    expect(screen.getAllByText(/my account/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
