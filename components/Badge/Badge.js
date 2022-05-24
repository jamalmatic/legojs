import React from 'react'
import Styles from 'Badge.module.css'
import { Brick } from "@lego-js/base";

const Badge = ({...props}) => {
    return (
      <Brick as={props.as || 'span'} cssModule={Styles} {...props}>
        {props.children || 'Badge'}
      </Brick>
    )
  }

export default Badge