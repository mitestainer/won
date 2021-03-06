import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import formatPrice from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: getImageUrl(banner.image?.url),
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label || null,
    buttonLink: banner.button?.link || null,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover?.url) as string,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        backgroundImage: getImageUrl(highlight.background?.url),
        floatImage: getImageUrl(highlight.floatImage?.url),
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: getImageUrl(game.cover?.url) as string,
        price: formatPrice(game.price),
        title: game.name
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => ({
        id: order.id,
        paymentInfo: {
          flag: order.card_brand,
          img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
          number: order.card_last4
            ? `**** **** **** ${order.card_last4}`
            : 'Free Game',
          purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date(order.created_at))}`
        },
        games: order.games.map((game) => ({
          id: game.id,
          title: game.name,
          downloadLink:
            'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
          img: getImageUrl(game.cover?.url),
          price: formatPrice(game.price)
        }))
      }))
    : []
}
