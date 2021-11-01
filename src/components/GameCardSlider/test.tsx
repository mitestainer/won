import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import GameCardSlider from '.'
import itemsMock from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={itemsMock} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={itemsMock} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
