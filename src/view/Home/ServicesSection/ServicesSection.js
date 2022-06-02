import React from 'react'
import styled from 'styled-components'

import Container from '~/components/ui/Container'
import ServiceBottomWave from '~/icons/ServiceBottomWave'
import ServiceTopWave from '~/icons/ServiceTopWave'
import ServiceItem from '~/view/Home/ServicesSection/ServiceItem'

const Wrapper = styled.section`
  position: relative;
  background-image: url('/assets/services_bg.png');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 220px 0px 220px 0px;
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
    width: -webkit-calc(100% + 1.3px);
    width: calc(100% + 1.3px);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    & path {
      fill: #fff;
      transform-origin: center;
      transform: rotateY(0deg);
    }
  }
`
const TopWave = styled(Wave)`
  top: -1px;
  transform: rotate(180deg);
  & svg {
    width: calc(100% + 1.3px);
    height: 80px;
  }
`
const BottomWave = styled(Wave)`
  bottom: -1px;
  & svg {
    width: calc(100% + 1.3px);
    height: 80px;
  }
`

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  position: relative;
`

const arr = [1, 2, 3, 4, 5, 6]
const ServicesSection = props => {
  return (
    <Wrapper>
      <BgMask />
      <TopWave>
        <ServiceTopWave />
      </TopWave>
      <Container>
        <SimpleGrid>
          {arr.map(i => (
            <ServiceItem key={i} />
          ))}
        </SimpleGrid>
      </Container>
      <BottomWave>
        <ServiceBottomWave />
      </BottomWave>
    </Wrapper>
  )
}

export default ServicesSection
