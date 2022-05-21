# Legojs philosophy:

## On the way to the perfect stack

Inspired by modern technologies and new methods in terms of fullstack development, and by the philosophy of the lego system. Our common goal would be to design the resilient stack, the everyone stack.

### As Axel Thomsen (From Lego company) says:

> *The LEGO System means that: all elements fit together, can be used in multiple ways, can be built together. This means that bricks bought years ago will fit perfectly with bricks bought in the future… It means that a LEGO element not only has instant value, but will keep its value always… We will always make sure that all bricks – from yesterday, today and tomorrow – fit together.*
> 

## Dependencies

1. Nextjs
2. React & React-dom
3. Tailwindcss

## Methods

1. CSS modules 
2. postcss nesting

## Lego components

Brick

## Brick Component Usage Example

```jsx
// Alert.js
import React from 'react'
import Brick from 'lego-components'
import Styles from './Alert.module.css' 

const Alert = ({as='div', ...props}) => {
  return (
    <Brick as={as} cssModule={Styles} variant={props.variant} {...props}>{props.children || 'Alert'}</Brick>
  )
}

export default Alert
```

## CSS Alert Module

```css
/* Alert.module.css */
.common {
    @apply w-full rounded-md px-5 py-4;
}

.default {
    @apply common bg-gray-300;
}

.info {
    @apply common bg-blue-400;
}

.success {
    @apply common bg-green-300;
}

.warning {
    @apply common bg-orange-400;
}

.danger {
    @apply common bg-red-600;
}
```