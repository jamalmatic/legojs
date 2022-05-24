import React from 'react'
import {Brick} from '@lego-js/base'
import Styles from './Alert.module.css' 

const Alert = ({as='div', ...props}) => {
  return (
    <Brick as={as} cssModule={Styles} variant={props.variant} {...props}>{props.children || 'Alert'}</Brick>
  )
}

export default Alert