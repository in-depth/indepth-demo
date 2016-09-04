import React from 'react'

const AppLayout = (props) => {
  return (
    <div>
      <div>Top Menu</div>
        {props.children}
      <div>Bottom menu</div>
    </div>
  )
}

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default AppLayout
