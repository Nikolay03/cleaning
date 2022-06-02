import React from 'react'
import styled from 'styled-components'

import Title from '~/components/elements/Title'
import { Image } from '~/components/Images'

const Box = styled.div`
  padding: 35px;
  background-color: #fff;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  & h2 {
    margin-top: 1em;
  }
`

const Texts = styled.div`
  padding-top: 3em;
  border-radius: 20px;
  & p {
    color: ${props => props.theme.color.secondary};
  }
`

const Li = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-gap: 10px;
  margin-bottom: 2em;
`

const texts = ['Bedrooms Cleaning', 'Kitchen size', 'Additional Rooms Cleaning', 'Refrigerator Cleaning',
  'Bathrooms Cleaning', 'Living rooms Cleaning'
]

const ServiceItem = props => {
  return (
    <Box>
      <Image objectFit={'contain'} src={'/assets/office_type.png'} alt={'banner'} style={{ height: '250px', width: '250px' }} />
      <Title as={'h2'}>Ofice cleaning</Title>
      <Texts>
        {texts.map((i, key) => (
          <Li key={key}>
            <Image objectFit={'contain'} src={'/assets/drip.png'} alt={'banner'} style={{ height: '15px', width: '15px' }} />
            <p >{i}</p>
          </Li>
        ))}
      </Texts>
    </Box>
  )
}

export default ServiceItem
