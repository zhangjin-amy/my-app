import React, { Component } from 'react';
import './index2.css';

interface Index2State {
  count: number;
  name: string;
}

interface Child1Props {
  count: number;
}

interface ChildState {
  random: number;
}

class Child1 extends Component<Child1Props, ChildState> {
  constructor(props: Child1Props) {
    super(props);
    console.log('---child constructor');
    this.state = {
      random: 0
    }
  }

  static getDerivedStateFromProps() {
    console.log('---child1 getDerivedStateFromProps');
    return null;
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

export default class Index2 extends Component<Readonly<{}>, Index2State> {
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

  shouldComponentUpdate(nextProps: Readonly<Readonly<{}>>, nextState: Readonly<Index2State>, nextContext: any): boolean {
    return false;
  }

  componentDidUpdate(prevProps: Readonly<Readonly<{}>>, prevState: Readonly<Index2State>, snapshot?: any): void {
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
          <p>Index2 count: {count}</p>
          <p>Index2 count: {name}</p>
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
 * getDerivedStateFromProps
 * getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
 */

/**
 * 更改父组件count || name
 * ---render
 * ---child1 getDerivedStateFromProps
 * ---child1 render
 * ---child1 componentDidUpdate
 * ---componentDidUpdate
 */

/**
 * 更改子组件random
 * ---child1 getDerivedStateFromProps
 * ---child1 render
 * ---child1 componentDidUpdate
 */
