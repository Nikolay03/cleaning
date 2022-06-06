import React from 'react'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Container from '~/components/ui/Container'
import { mediaQueries } from '~/constants/mediaQueries'
import { Image } from '~/components/Images'
import Title from '~/components/elements/Title'
import * as ROUTES from '~/constants/routes'
import { PARTNERS } from '~/constants/routes'

const StyledCont = styled(Container)`
  padding-top: 90px;
  & h2 {
    margin-bottom: 40px;
    text-align: center;
  }
  @media ${mediaQueries.laptopS} {
    padding-bottom: 90px;
    padding-bottom: 0px;
  }
  @media ${mediaQueries.tabletL} {
    padding-top: 40px;
  }
`
const SliderCont = styled('div')`
`

const SlideCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 60px 100px 60px;
  height: 300px;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const images = [
  {
    src: '/assets/partner.jpg',
    alt: 'Товар'
  },
  {
    src: '/assets/partner.jpg',
    alt: 'Товар 2'
  },
  {
    src: '/assets/partner.jpg',
    alt: 'Товар 2'
  },
  {
    src: '/assets/partner.jpg',
    alt: 'Товар'
  },
  {
    src: '/assets/partner.jpg',
    alt: 'Товар 2'
  },
  {
    src: '/assets/partner.jpg',
    alt: 'Товар 2'
  }
]

const PartnersSection = props => {
  return (
    <StyledCont as={'section'} id={ROUTES.PARTNERS}>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true}>
        <Title as={'h2'}>Партнеры</Title>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true} delay={100}>
        <SliderCont>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            arrows={false}
            dotListClass={'react-cert-carousel-dot-list'}
            containerClass={'react-cert-carousel-list'}
            transitionDuration={500}
          >
            {[...images, ...images].map(i => (
              <SlideCont key={i.alt}>
                <Image src={i.src} alt={i.alt} style={{ width: '125px', height: '125px' }} objectFit={'contain'} />
              </SlideCont>
            ))}
          </Carousel>
        </SliderCont>
      </AnimationOnScroll>
    </StyledCont>
  )
}

export default PartnersSection
