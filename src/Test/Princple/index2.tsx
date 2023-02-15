import React, { Component, PureComponent } from 'react'

interface ButtonProps {
  color: string;
  text: string;
}

interface Index2State {
  color: string;
  text: string;
  count: number;
}


class Button1 extends Component<ButtonProps, Readonly<{}>> {
  render(){
    console.log(`render button1 props: ${JSON.stringify(this.props)}}`);
    const { color, text } = this.props;
    return (
      <button style={{ background: color }}>Button1: {text}</button>
    );  
  }
}

class Button2 extends PureComponent<ButtonProps, Readonly<{}>> {
  render(){
    console.log(`render button2 props: ${JSON.stringify(this.props)}}`);
    const { color, text } = this.props;
    return (
      <button style={{ background: color }}>Button2: {text}</button>
    );  
  }
}

class Index2 extends Component<Readonly<{}>, Index2State> {
  state = {
    color: 'red',
    text: '红色',
    count: 0
  }

  onChangeCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  onChangeButton() {
    this.setState({
      color: 'green',
      text: '绿色'
    })
  }

  render() {
    const { color, text, count } = this.state;
    return (
      <div>
        index2 count: {count}
        <div>
          <button onClick={this.onChangeCount.bind(this)}>changeCount</button>
        </div>
        <div>
          <button onClick={this.onChangeButton.bind(this)}>changeButton</button>
        </div>
        <div><Button1 color={color} text={text} /></div>
        <div><Button2 color={color} text={text} /></div>
      </div>
    )
  }
}

/**
 * 比较Component 和 PureComponet
 */
export default Index2;

