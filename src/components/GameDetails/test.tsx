import { render, screen } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'Walkabout',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render publisher', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/walkabout/i)).toBeInTheDocument()
  })

  it('should render developer', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('should render FREE rating when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
