import React from 'react'
import styled from 'styled-components'

import BannerSection from '~/view/Home/BannerSection/BanerSection'
import { mediaQueries } from '~/constants/mediaQueries'
import PartnersSection from '~/view/Home/PartnersSection/HomeСertificates'
import ServicesSection from '~/view/Home/ServicesSection/ServicesSection'

const Wrapper = styled.div`
  padding: 160px 0px 120px 0px;
  background-image: url('/assets/bg_banner.png');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    width: 55%;
    height: 55%;
    position: absolute;
    right: -10%;
    top: -20%;
    background: #fff;
    opacity: 0.9;
  };
  &:after {
    content: '';
    width: 55%;
    height: 55%;
    position: absolute;
    right: -10%;
    top: -20%;
    background-image: url('/assets/office.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    z-index: -1;
  }
  @media ${mediaQueries.laptopS} {
    padding: 100px 0px 60px 0px;
  }
`

const HomeGrid = props => {
  return (
    <>
      <Wrapper>
        <BannerSection />
      </Wrapper>
      <ServicesSection />
      <PartnersSection />
    </>
  )
}

export default HomeGrid
