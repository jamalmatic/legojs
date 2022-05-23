import React from 'react'

const Brick = ({as,cssModule, variant='default', className, children, ...props}) => {
    const classNames = [getStylesFromCssModule(cssModule, variant).join(' '), className]
    const Tag = as ? `${as}`: React.Fragment
  return (
    <Tag className={classNames.join(' ')} {...props}>{children && children}</Tag>
  )
}

export default Brick

const getStylesFromCssModule = (obj, arr) => arr.split(' ').map(i => {
    
    if (obj && obj[i]) return obj[i]
    if (obj && !obj[i] && obj.default) return obj.default
    
    
  })
