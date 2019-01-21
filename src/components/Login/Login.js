import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { View, TouchableOpacity,Text,ScrollView } from 'react-native';
import MyTextInput from './MyTextInput';

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <ScrollView  onSubmit={handleSubmit}>
      <View>
        <Text>Email</Text>
        <Field name={'Email'} component={MyTextInput} placeholder="Email"/>
      </View>
      <View>
        <Text>Pass</Text>
        <Field name={'Pass'} component={MyTextInput} placeholder="Password"/>
      </View>
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView >
  );
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm