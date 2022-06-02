import React from 'react'
import styled from 'styled-components'

import Container from '~/components/ui/Container'
import Title from '~/components/elements/Title'
import menus from '~/constants/menus'
import SocialItems from '~/components/Menu/SocialItems'

const SimpleGrid = styled.div`
  display: grid;
  grid: 1fr / 1fr 1fr 1fr;
`

const Block = styled.div`
  border-width: ${({ padding }) => padding ? '0px 0px 0px 1px' : '0px'};
  border-style: solid;
  border-color: #1B2529;
  padding: ${({ padding }) => padding ? '15px 15px 15px 50px' : '10px'};
  & h5 {
    margin-bottom: 35px;
  }
`

const Texts = styled.div`
  & p {
    color: ${props => props.theme.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.micro};
    margin-bottom: 15px;
  }
`

const MenuList = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: min-content min-content;
`

const MenuItem = styled('div')`
  height: min-content;
  color: ${props => props.theme.color.secondary};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.micro};
  font-weight: 500;
  transition: ${props => props.theme.transition};
  &.active {
    color: ${({ theme }) => theme.color.white};
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`

const Socials = styled.div`
  display: grid;
  grid-gap: 30px;
  align-items: center;
  grid: 1fr / repeat(3, min-content);
  & svg {
    fill: ${({ theme }) => theme.background.secondary};
  }
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
`

const FooterNav = props => {
  return (
    <Wrapper>
      <Container>
        <SimpleGrid>
          <Block>
            <Title as={'h5'} color={'white'}>Часы работы</Title>
            <Texts>
              <p>Mon – Fri 8am – 6pm</p>
              <p>Saturday 10am – 1pm</p>
            </Texts>
          </Block>
          <Block padding={true}>
            <Title as={'h5'} color={'white'}>Компания</Title>
            <MenuList>
              {menus.map((item, index) => {
                const url = item.url
                const label = item.label
                return (
                  <a href={`#${url}`} key={index}>
                    <MenuItem>
                      <span>{label}</span>
                    </MenuItem>
                  </a>
                )
              })}
            </MenuList>
          </Block>
          <Block padding={true}>
            <Title as={'h5'} color={'white'}>Соц. сети</Title>
            <Socials>
              <SocialItems gradient={true} size={'30'} />
            </Socials>
          </Block>
        </SimpleGrid>
      </Container>
    </Wrapper>
  )
}

export default FooterNav
