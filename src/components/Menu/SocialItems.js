import React from 'react'
import { Facebook } from 'react-feather'
import styled from 'styled-components'

import Telegram from '~/icons/socials/Telegram'
import Instagram from '~/icons/socials/Instagram'

const Link = styled.a`
  width: ${({ size }) => size ? `${size}px` : '20px'};
  height: ${({ size }) => size ? `${size}px` : '20px'};
`
const SocialItems = ({ size }) => {
  return (
    <>
      <Link href={''}>
        <Telegram />
      </Link>
      <Link href={''}>
        <Instagram />
      </Link>
      <Link href={''}>
        <Facebook size={20} color={'transparent'} />
      </Link>
    </>
  )
}

export default SocialItems
