import React from 'react'
import { Tab, Tabs } from 'react-toolbox/lib/tabs'

import { MapTab } from '../index'

class MapTabs extends React.Component {
  constructor() {
    super()
    this.state = { index: 0 }
  }

  handleTabChange(index) {
    this.setState({ index })
  }

  render() {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange.bind(this)}>
        {this.props.mapLevels.map((mapLevel) => (
          <Tab label={mapLevel.title} key={mapLevel.title}>
            <MapTab title={mapLevel.title} url={mapLevel.imageUrl} />
          </Tab>
        ))}
      </Tabs>
    )
  }
}

MapTabs.propTypes = {
  mapLevels: React.PropTypes.array.isRequired,
}

export default MapTabs
