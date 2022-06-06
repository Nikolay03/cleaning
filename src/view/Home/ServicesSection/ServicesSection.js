import { AnimationOnScroll } from 'react-animation-on-scroll'
import React from 'react'
import styled from 'styled-components'

import Container from '~/components/ui/Container'
import ServiceBottomWave from '~/icons/ServiceBottomWave'
import ServiceTopWave from '~/icons/ServiceTopWave'
import ServiceItem from '~/view/Home/ServicesSection/ServiceItem'
import { mediaQueries } from '~/constants/mediaQueries'
import Title from '~/components/elements/Title'
import * as ROUTES from '~/constants/routes'
import { SERVICES } from '~/constants/routes'

const Wrapper = styled.section`
  position: relative;
  background-image: url('/assets/services_bg.png');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 220px 0px 220px 0px;
  @media ${mediaQueries.tabletL} {
    padding: 120px 0px 120px 0px;
  };
`

const BgMask = styled.div`
  background-color: transparent;
  background-image: linear-gradient(0deg, #13191B 0%, #13191B 100%);
  opacity: 0.94;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`

const Wave = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
  & svg {
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    & path {
      fill: #fff;
      transform-origin: center;
      transform: rotateY(0deg);
    }
  }
  @media ${mediaQueries.tabletL} {
    & svg {
      height: 40px;
    }
  }
`
const TopWave = styled(Wave)`
  top: -1px;
  transform: rotate(180deg);
`
const BottomWave = styled(Wave)`
  bottom: -1px;
`

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  position: relative;
  @media ${mediaQueries.laptopM} {
    grid-gap: 40px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${mediaQueries.tabletL} {
    grid-gap: 40px 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const arr = [1, 2, 3, 4, 5, 6]
const ServicesSection = props => {
  return (
    <Wrapper id={ROUTES.SERVICES}>
      <BgMask />
      <TopWave>
        <ServiceTopWave />
      </TopWave>
      <Container>
        <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true}>
          <Title as={'h2'} color={'white'} style={{
            marginBottom: '80px',
            position: 'relative',
            textAlign: 'center'
          }}>Услуги</Title>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true}>
          <SimpleGrid>
            {arr.map(i => (
              <ServiceItem key={i} />
            ))}
          </SimpleGrid>
        </AnimationOnScroll>
      </Container>
      <BottomWave>
        <ServiceBottomWave />
      </BottomWave>
    </Wrapper>
  )
}

export default ServicesSection
