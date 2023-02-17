import React, { Component } from 'react'

export default class Index4 extends Component {
  state = {
    count: 0
  }

  onChangeCount = () => {
    /**
     * setState的批处理
     */
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('o set', this.state.count)
      this.setState({
        count: this.state.count + 1
      })
    })
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('1 set', this.state.count)
    // })
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('2 set', this.state.count)
    // })
  }

  render() {
    return (
      <div>
        Index4
        <p>count: {this.state.count}</p>
        <button onClick={this.onChangeCount}>change count</button>
      </div>
    )
  }
}
