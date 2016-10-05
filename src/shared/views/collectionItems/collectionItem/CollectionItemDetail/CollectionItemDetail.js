import React from 'react'

const CollectionItemDetail = (props) => {
  return (
    <div>
      {props.fullDesc.map(desc => (
        <div>
          <h3>{desc.sectionTitle}</h3>
          <p>{desc.section}</p>
        </div>
      ))}
    </div>
  )
}

CollectionItemDetail.propTypes = {
  fullDesc: React.PropTypes.array,
}

export default CollectionItemDetail
