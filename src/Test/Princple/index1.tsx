import React from 'react';

interface ButtonProps {
  color: string;
}


const formatterColor = (color: string): string => `我的颜色文案是${color}`;


class Button extends React.Component<ButtonProps, ButtonProps> {
  state = {
    color: this.props.color,
  };
  render() {
    const { color } = this.state; // 🔴 `color` is stale!
    return (
      <button style={{ background: color }}>
        {color}
      </button>
    );
  }
}

class Button1 extends React.Component<ButtonProps, any> {
  render() {
    const { color } = this.props; // 🏀 `color` is update!
    return (
      <button style={{ background: color }}>
        {color}
      </button>
    );
  }
}

class Button2 extends React.Component<ButtonProps, ButtonProps> {
  state = {
    color: this.props.color,
  };

  static getDerivedStateFromProps(props: ButtonProps, state: ButtonProps) {
    if (props.color !== state.color) {
      return {
        color: props.color
      }
    }
    return null;
  }
  render() {
    const { color } = this.state; // 👌 update
    return (
      <button style={{ background: color }}>
        {color}
      </button>
    );
  }
}

class Button3 extends React.Component<ButtonProps, ButtonProps> {
  state = {
    color: this.props.color,
  };

  componentDidUpdate(prevProps: Readonly<ButtonProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.color !== this.props.color) {
      this.setState({
        color: this.props.color
      })
    }
  }

  render() {
    console.log(`button props: ${this.props.color}; state: ${this.state.color}`);
    const { color } = this.state; // 👌 update
    return (
      <button style={{ background: color }}>
        {color}
      </button>
    );
  }
}

// calculation
class Button4 extends React.Component<ButtonProps, { colorText: string} > {
  state = {
    colorText: formatterColor(this.props.color)
  };


  render() {
    const { colorText } = this.state; // 🔴 `colorText` is stale!
    return (
      <button style={{ background: this.props.color }}>
        {colorText}
      </button>
    );
  }
}

class Button5 extends React.PureComponent<ButtonProps, { colorText: string} > {
  state = {
    colorText: formatterColor(this.props.color)
  };


  render() {
    const { colorText } = this.state; // 🔴 `colorText` is stale!
    return (
      <button style={{ background: this.props.color }}>
        {colorText}
      </button>
    );
  }
}

class Button6 extends React.PureComponent<ButtonProps, {} > {

  render() {
    const colorText = formatterColor(this.props.color); // 👌 `colorText` is update!
    return (
      <button style={{ background: this.props.color }}>
        6:{colorText}
      </button>
    );
  }
}


// 这样也是可以的，但是props相同的时候会重复渲染
class Button7 extends React.Component<ButtonProps, {} > {

  render() {
    const colorText = formatterColor(this.props.color); // 👌 `colorText` is update!
    return (
      <button style={{ background: this.props.color }}>
        7: {colorText}
      </button>
    );
  }
}


class Parent extends React.Component {
  state = {
    color: 'red'
  }
  onChangeColor() {
    this.setState({
      color: 'green'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.onChangeColor.bind(this)}>change color</button>
        color: {this.state.color}
        {/* <Button color={this.state.color} /> */}
        {/* <Button1 color={this.state.color} /> */}
        {/* <Button2 color={this.state.color} /> */}
        {/* <Button3 color={this.state.color} /> */}
        {/* <Button4 color={this.state.color} /> */}
        {/* <Button5 color={this.state.color} /> */}
        {/* <Button6 color={this.state.color} /> */}
        <Button7 color={this.state.color} />
      </div>
    );
  }
}

/**
 * https://overreacted.io/writing-resilient-components/#writing-resilient-components
 */

export default Parent;