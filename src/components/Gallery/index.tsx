import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from '@styled-icons/material-outlined'

import Slider, { SliderSettings } from 'components/Slider'
import { useState, useEffect, useRef } from 'react'
import SlickSlider from 'react-slick'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings} ref={slider}>
        {items.map(({ src, label }: GalleryImageProps, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`Thumb - ${label}`}
            role="button"
            key={`thumb-${i}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(i, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider settings={modalSettings} ref={slider}>
            {items.map(({ src, label }: GalleryImageProps, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={label} key={`gallery-${i}`} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
