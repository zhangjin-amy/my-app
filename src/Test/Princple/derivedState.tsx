import React, { Component } from 'react'

interface EmailInputProps {
  email: string;
}

class EmailInput extends Component<EmailInputProps, EmailInputProps> {
  state = { email: this.props.email };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: event.currentTarget?.value});
  };

  componentWillReceiveProps(nextProps: EmailInputProps) {
    // This will erase any local state updates!
    // Do not do this.
    this.setState({
      email: nextProps.email
    })
  }

}

export default class Index1 extends Component {
  state = {
    email: 'index1.com',
    name: 'amy'
  }

  componentDidMount(): void {
    setTimeout(() => {
      console.log('---componentDidMount');
      this.setState({
        name: 'rouzip'
      })
    }, 3000)

  }

  render() {
    return (
      <div>
        Index1 name:{this.state.name}
        <EmailInput email={this.state.email}/>
      </div>
    )
  }
}
