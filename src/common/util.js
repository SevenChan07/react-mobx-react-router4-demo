/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/state-in-constructor */
/* eslint react/destructuring-assignment: off */
import React from 'react'

export function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null

    state = {Component: AsyncComponent.Component}

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({Component})
        })
      }
    }

    render() {
      const {Component} = this.state

      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

export function con() {
  console.log('this is util')
}
