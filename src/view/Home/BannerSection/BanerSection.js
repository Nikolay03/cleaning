import React from 'react'
import styled from 'styled-components'

import Container from '~/components/ui/Container'
import Image from '~/components/Images/Image'
import RequestReport from '~/view/Home/BannerSection/RequestReport/RequestReport'
import { mediaQueries } from '~/constants/mediaQueries'

const SimpleGrid = styled.div`
  display: grid;
  align-items: center;
  grid: 1fr / 1fr 2fr;
  grid-gap: 80px;
  position: relative;
  @media ${mediaQueries.laptopS} {
    grid: 1fr / 1fr;
    justify-items: center;
  }
`

const Box = styled.div`
  @media ${mediaQueries.laptopS} {
    display: none;
  }
`

const Wrapper = styled.section`
  position: relative;
`
const BannerSection = props => {
  return (
    <Wrapper>
      <Container>
        <SimpleGrid>
          <RequestReport />
          <Box>
            <Image objectFit={'contain'} src={'/assets/banner_img.png'} alt={'banner'} style={{ minHeight: '560px' }} />
          </Box>
        </SimpleGrid>
      </Container>
    </Wrapper>
  )
}

export default BannerSection
