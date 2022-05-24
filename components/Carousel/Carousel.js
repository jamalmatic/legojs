import React from 'react'
import Styles from './Carousel.module.css'
import {Brick}  from  '@lego-js/base'

const Carousel = ({...props}) => {
    return (
      <Brick as={props.as || 'div'} cssModule={Styles} {...props}>
        {props.children || 'Carousel'}
      </Brick>
    )
  }

export default Carousel