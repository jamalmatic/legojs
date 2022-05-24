import React from 'react'
import Styles from './ButtonGroup.module.css'
import { Brick } from '@lego-js/base'

const ButtonGroup = ({...props}) => {
    return (
        <Brick as={props.as || 'div'} cssModule={Styles} {...props}>
            {props.children || 'button group'}
        </Brick>
    )
  }

export default ButtonGroup