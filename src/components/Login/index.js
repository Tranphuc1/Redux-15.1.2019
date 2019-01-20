import React from 'react'
import LoginForm from './Login'
import { Alert } from 'react-native';
export default class Login extends React.Component {
  handleSubmit = value => {

    // print the form values to the console
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Email', onPress: () => alert(value.Email)},
        {text: 'Pass', onPress: () => alert(value.Pass)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
  render() {
    return <LoginForm onSubmit={this.handleSubmit} />
  }
}