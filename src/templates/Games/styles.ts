import styled, { css } from 'styled-components'
import { Container } from 'components/Container'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      column-gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    cursor: pointer;
    color: ${theme.colors.white};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
