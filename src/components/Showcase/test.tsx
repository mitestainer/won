import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Showcase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<Showcase highlight={highlightMock} games={gamesMock.slice(0, 1)} />)

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: 'Most Popular' })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<Showcase title={'Most Popular'} games={gamesMock.slice(0, 1)} />)

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<Showcase title={'Most Popular'} highlight={highlightMock} />)

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
