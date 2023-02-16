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
  state = {
    btn1Name: 'buttton1'
  }
  onChangeBtn1Name = () => {
    console.log('onChangeBtn1Name');
    this.setState({
      btn1Name: 'buttton1' //  ❌会重复渲染
    })
  }
  render(){
    console.log(`render button1 props: ${JSON.stringify(this.props)}}`);
    const { color, text } = this.props;
    return (
      <div>
        button1 btn1Name: {this.state.btn1Name}
        <div>
          <button style={{ background: color }} onClick={this.onChangeBtn1Name}>Button1: {text}</button>
        </div>
      </div>
    );  
  }
}

class Button2 extends PureComponent<ButtonProps, {btn2Name: string}> {
  state = {
    btn2Name: 'buttton2'
  }
  onChangeBtn2Name = () => {
    this.setState({
      btn2Name: 'buttton2' // ✅可以阻止重复渲染
    })
  }
  render(){
    console.log(`render button2 props: ${JSON.stringify(this.props)}}`);
    const { color, text } = this.props;
    return (
      <div>
        button2 btn2Name: {this.state.btn2Name}
        <div>
          <button style={{ background: color }} onClick={this.onChangeBtn2Name}>Button2: {text}</button>
        </div>
      </div>
      
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
 * PureComponent is similar to Component but it skips re-renders for same props and state；
 * shouldComponetUpdate
 */
export default Index2;

