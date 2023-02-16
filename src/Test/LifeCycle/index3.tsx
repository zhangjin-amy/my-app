import React, { Component, PureComponent } from 'react';
import './index2.css';

interface Index3State {
  count: number;
  name: string;
}

interface Child1Props {
  count: number;
}

interface ChildState {
  random: number;
}

class Child1 extends PureComponent<Child1Props, ChildState> {
  constructor(props: Child1Props) {
    super(props);
    console.log('---child constructor');
    this.state = {
      random: 0
    }
  }


  componentDidMount(): void {
    console.log('---child1 componentDidMount');
  }

  componentDidUpdate(prevProps: Readonly<Child1Props>, prevState: Readonly<ChildState>, snapshot?: any): void {
    console.log('---chid1 componentDidUpdate', this.props.count, this.state.random);
  }

  changeRandom = () => {
    this.setState({
      random: Math.random()
    })
  };

  render() {
    console.log('---child1 render');
    return (
      <div className="child">
        <p>child1 random: {this.state.random}</p>
        <p>child1 count {this.props.count}</p>
        <div>
          <button onClick={this.changeRandom}>change random</button>
        </div>
      </div>
    );
  }
}

export default class Index3 extends Component<Readonly<{}>, Index3State> {
  constructor(props: {}) {
    super(props);
    console.log('---constructor'); // 1
    this.state = {
      count: 0,
      name: 'amy'
    }
  }

  componentDidMount(): void {
      console.log('---componentDidMount'); // 3
  }

  componentDidUpdate(prevProps: Readonly<Readonly<{}>>, prevState: Readonly<Index3State>, snapshot?: any): void {
    console.log('---componentDidUpdate', this.state.count);
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    // ---render
    // ---componentDidUpdate 更新后的count
  }

  changeName = () => {
    this.setState({
      name: `${this.state.name}1`
    })
  }

  render() {
    console.log('---render'); // 2
    const { count, name } = this.state;
    return (
      <div className="main">
          <p>Index3 count: {count}</p>
          <p>Index3 count: {name}</p>
          <div>
            <button onClick={this.addCount}>add count</button>
            <button onClick={this.changeName}>change name</button>
          </div>
          <Child1 count={count}/>
      </div>
    )
  }
}

/**
 * 
---constructor
---render
---child constructor
---child1 render
---child1 componentDidMount
---componentDidMount
 */

/**
 * 修改父组件的count
 * ---render
 * ---child1 render
 * ---chid1 componentDidUpdate
 * ---componentDidUpdate
 */

/**
 * 修改父组件的name
 * ---render
 * ---componentDidUpdate 0
 */

/**
 *  修改子组件的state, 只会触发子组件的render + componentDidUpdate
 */
