import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import { render } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    render(<TextField label="Label" name="field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    render(<TextField onInput={onInput} label="TextField" name="textField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    render(<TextField label="TextField" name="textField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render an icon', () => {
    render(
      <TextField
        label="withIcon"
        name="withIcon"
        icon={<Email data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should not allow changing its values when disabled', async () => {
    const onInput = jest.fn()

    render(
      <TextField
        onInput={onInput}
        label="textField"
        name="textField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('should not be accessible by tab if disabled', () => {
    render(<TextField label="textField" name="textField" disabled />)

    const input = screen.getByLabelText(/textfield/i)
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should render the error message and styles', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="textField"
        name="textField"
        error="Error message"
      />
    )

    expect(screen.getByText(/error message/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
