import React from 'react'

const Patterns = (props) => {
  return (
    <div className="layout-wrapper">
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <div className="pattern4"></div>
      <div className="pattern5"></div>
      
      {props.children}
    </div>
  )
}

export default Patterns

