import React from 'react'

import Button from '~/components/ui/Button'

const defaultButtonProps = {
  height: '68px',
  type: 'button',
  uppercase: true,
  fontSize: '16px'
}

const OrderButton = props => {
  return (
    <a href={'https://t.me/tg'}>
      <Button
        {...defaultButtonProps}
        {...props}
        themeType={'gradient'}
      >
        Заказать услугу
      </Button>
    </a>
  )
}

OrderButton.propTypes = {

}

export default OrderButton
