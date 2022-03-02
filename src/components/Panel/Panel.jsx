import React from 'react';

import './style.scss';

function Panel(props) {
  const { children, className, styled } = props;
  return (
    <React.Fragment>
      <div className={`panel ${className?className:''}`} style={(styled)?styled:{}}>
        {children}
      </div>
    </React.Fragment>  
  )
}

export default Panel;