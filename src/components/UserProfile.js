import React, { Component } from "react";
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
class UserProfileScreen extends Component {
  render() {
    const { navigation } = this.props;
    const item = this.props.MyData;
    // const item = navigation.getParam('item', 'no-item');
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
function mapStateToProps(state){
  return {
    MyData: state.item
  }
}
export default connect(mapStateToProps)(UserProfileScreen);