import React from 'react'

class Quiz extends React.Component {
  render() {
    const {pseudo} = this.props.userData
    return (
      <div>
        <h2>Pseudo : {pseudo}</h2>
      </div>
    )
  }
}


export default Quiz