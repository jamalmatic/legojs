import React from 'react'
import Styles from './lab.module.css'
import {Brick}  from  '@lego-js/base'
const lab = () => {
  return (
    <div className=''>
      <Badge variant='default' />
      <Badge variant='default-outline' />
      <Badge variant='primary' />
      <Badge variant='primary-outline' />
      <Badge variant='secondary' />
    </div>
    

  )
}

export default lab

const Badge = ({...props}) => {
  return (
    <Brick as={props.as || 'div'} cssModule={Styles} {...props}>
      {props.children || 'Badge'}
    </Brick>
  )
}