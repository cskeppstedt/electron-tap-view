import { connect } from 'react-redux'
import React from 'react'
import Home from '../components/Home'
import mapStateToProps from './map-state-to-props'
import mapDispatchToProps from './map-dispatch-to-props'

const AppContainer = React.createClass({
  render () {
    return (
      <Home {...this.props} />
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
