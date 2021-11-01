import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.medium};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('small')`
      padding: ${theme.spacings.large};
    `}

    ${media.greaterThan('medium')`
    ${RibbonStyles.Wrapper} {
      right: ${theme.spacings.large};
      top: ${theme.spacings.large};
      font-size: ${theme.font.sizes.large};

      &:before {
        border: none;
      }
    }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      column-gap: 2rem;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`
