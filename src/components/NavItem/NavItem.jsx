import React from 'react';
import cl from './NavItem.module.css'

const NavItem = ({text, children}) => {

  return (
    <div className={cl.box}>
      {children}
      <p className={['text text_type_main-default', cl.text].join(' ')}>{text}</p>
    </div>
  )
}

export default NavItem;