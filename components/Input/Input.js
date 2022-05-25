import React from 'react'
import { Brick } from '@lego-js/base'
import Styles from './Input.module.css'

const Input = ({...props}) => {
    return (
        <Brick 
            as={props.as || 'input'} 
            type={props.type ? props.type : 'text'} 
            cssModule={Styles} {...props} 
            placeholder = {props.placeholder ? props.placeholder : 'Input Field'}
        />
    )
}

export default Input