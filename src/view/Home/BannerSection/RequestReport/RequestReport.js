import React, { useState } from 'react'
import styled from 'styled-components'

import TextField from '~/components/ui/TextField'
import FieldWrapper from '~/components/ui/FieldWrapper'
import Button from '~/components/ui/Button'
import Title from '~/components/elements/Title'
import { mediaQueries } from '~/constants/mediaQueries'

const defaultButtonProps = {
  height: '68px',
  uppercase: true,
  fullWidth: true,
  fontSize: '16px'
}

const Box = styled.div`
  background: linear-gradient(rgba(0 132 199 / 60%), rgba(0 132 199 / 60%), rgba(0 132 199 / 60%));
  padding: 20px;
  border-radius: 5px;
`

const RequestBox = styled.div`
  max-width: 670px;
  min-width: 460px;
  @media ${mediaQueries.laptopS} {
    min-width: 80%;
    max-width: 80%;
    & h1 {
      text-align: center;
    }
  }

`

const RequestReport = props => {
  const [values, setValues] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setValues(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.warn(values)
  }
  return (
    <RequestBox>
      <FieldWrapper>
        <Title as={'h1'} withGradient={true}>COMMERCIAL & OFFICE CLEANING</Title>
      </FieldWrapper>
      <form onSubmit={handleSubmit}>
        <Box>
          <FieldWrapper>
            <Title as={'h3'}>Запросить расчет</Title>
          </FieldWrapper>
          <FieldWrapper>
            <TextField
              name={'name'}
              placeholder={'Введите имя'}
              onChange={handleChange}
              fullWidth={true}
            />
          </FieldWrapper>
          <FieldWrapper>
            <TextField
              name={'phone'}
              placeholder={'Номер телефона'}
              onChange={handleChange}
              fullWidth={true}
            />
          </FieldWrapper>
          <Button
            {...defaultButtonProps}
            themeType={'secondary'}
          >
            Отправить
          </Button>
        </Box>
      </form>
    </RequestBox>
  )
}

export default RequestReport
