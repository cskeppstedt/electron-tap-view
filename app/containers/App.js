import { connect } from 'react-redux'
import React from 'react'
import AppComponent from '../components/App'
import mapStateToProps from './map-state-to-props'
import mapDispatchToProps from './map-dispatch-to-props'

const AppContainer = React.createClass({
  render () {
    return (
      <AppComponent {...this.props} />
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
