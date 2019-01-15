import React, { Component } from "react";
import {View,Text} from 'react-native';
export default class UserProfileScreen extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'no-item');
    return (
        <View>
          <Text>ID: {JSON.stringify(item.id)}</Text>
          <Text>task_code: {JSON.stringify(item.task_code)}</Text>
          <Text>DESCRIPTION:{JSON.stringify(item.description)}</Text>
          <Text>NAME:{JSON.stringify(item.task_name)}</Text>
          <Text>Created_At:{JSON.stringify(item.created_at)}</Text>
        </View>
    );
  }
}