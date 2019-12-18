import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

@observer
class Hello extends React.Component {
  render() {
    return (
      <div className="page-hello">
        this is hello
      </div>
    )
  }
}

export default Hello
