import React, { Component } from 'react';

interface Index1State {
  count: number;
}

export default class Index1 extends Component<Readonly<{}>, Index1State> {
  constructor(props: {}) {
    super(props);
    console.log('---constructor'); // 1
    this.state = {
      count: 0
    }
  }

  componentDidMount(): void {
      console.log('---componentDidMount'); // 3
  }

  componentDidUpdate(prevProps: Readonly<Readonly<{}>>, prevState: Readonly<Index1State>, snapshot?: any): void {
    console.log('---componentDidUpdate', this.state.count);
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    // ---render
    // ---componentDidUpdate 更新后的count
  }

  render() {
    console.log('---render'); // 2
    return (
      <div>
          index1 count: {this.state.count}
          <div>
            <button onClick={this.addCount}>add</button>
          </div>
      </div>
    )
  }
}
