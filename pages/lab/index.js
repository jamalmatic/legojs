import React from 'react'
import Styles from './lab.module.css'
import Brick from 'legojs'

const lab = () => {
  return (
    <div className='uppercase'>
      <Button >default</Button>
      <Button variant='primary' >primary</Button>
      <Button variant='secondary' >secondary</Button>
      <Button variant='secondary with-icon'>
        <span>secondari</span>
      </Button>
    </div>
    

  )
}

export default lab

const Button = ({...props}) => {
  return (
    <Brick as={props.as || 'div'} cssModule={Styles} {...props}>
      {props.children || 'button'}
    </Brick>
  )
}