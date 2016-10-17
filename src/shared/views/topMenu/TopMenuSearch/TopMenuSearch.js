import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { IconButton } from 'react-toolbox/lib/button'

import styles from './topMenuSearch.css'

class TopMenuSearch extends Component {
  static propTypes = {
    renderSearchResults: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      search: false,
    }
  }

  toggleSearchBar() {
    this.setState({ search: !this.state.search })
  }

  renderSearchResults(e) {
    if (e.which === 13) this.props.renderSearchResults(e.target.value)
  }

  render() {
    const { search } = this.state
    let searchBar
    if (search) {
      searchBar = (<div key={'sbar'} className={styles.searchbar}>
        <input type={'text'} onKeyDown={this.renderSearchResults.bind(this)} />
      </div>)
    }

    return (
      <div className={styles.search}>
        <ReactCSSTransitionGroup
          transitionName={'sbar'}
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {searchBar}
        </ReactCSSTransitionGroup>
        <IconButton inverse={!search} icon="search" onClick={this.toggleSearchBar.bind(this)} />
      </div>
    )
  }
}

export default TopMenuSearch
