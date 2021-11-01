import Link from 'next/link'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import formatPrice from 'utils/formatPrice'

import * as S from './styles'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => {
  return (
    <S.Wrapper>
      <Link href={`/game/${slug}`} passHref>
        <S.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`/game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton>
          <WishlistButton id={id} />
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  )
}

export default GameCard
