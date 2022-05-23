import React from 'react'
import Styles from './Button.module.css'
import Brick from 'legojs'

const Button = ({...props}) => {
  return (
    <Brick as={props.as || 'button'} cssModule={Styles} {...props}>
      {props.children || 'button'}
    </Brick>
  )
}

export default Button