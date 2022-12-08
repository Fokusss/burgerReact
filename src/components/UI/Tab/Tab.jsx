import React from 'react';
import cl from './Tab.module.css';

const Tab = ({value, active, onClick, children}) => {
  const rootClasses = [cl.button]

  if (active) {
    rootClasses.push(cl.active);
  }

  return (
    <div value={value} className={rootClasses.join(' ')} onClick={() => onClick(value)}>
      <p className="text text_type_main-default">{children}</p>
    </div>
  )
}

export default Tab;