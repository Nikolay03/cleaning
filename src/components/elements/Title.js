import React from 'react'
import styled from 'styled-components'

const styles = ({ theme, size }) => {
  switch (size) {
    case 'h1': return { fontSize: theme.fontSize.large, fontWeight: 900, letterSpacing: '-2.3px' }
    case 'h2': return { fontSize: theme.fontSize.big, fontWeight: 600 }
    case 'h3': return { fontSize: theme.fontSize.capital }
    case 'h4': return { fontSize: theme.fontSize.medium }
    default: return { fontSize: theme.fontSize.capital }
  }
}
const TitleStyled = styled.h1`
  color: ${({ theme, color }) => color === 'dark' ? theme.color.primary : theme.palette.secondary};
  line-height: 1.22;
  ${(props) => styles(props)}
`

const gradient = (withGradient) => {
  return withGradient
    ? {
      backgroundImage: 'linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }
    : {}
}

const Title = ({ as, children, style, withGradient, ...props }) => {
  return (
    <TitleStyled
      size={as}
      as={as}
      style={{ ...style, ...gradient(withGradient) }}
      {...props}
    >
      {children}
    </TitleStyled>
  )
}

Title.defaultProps = {
  color: 'dark'
}

export default Title
