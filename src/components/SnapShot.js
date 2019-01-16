import React from 'react';
import { View,StyleSheet,Text} from 'react-native';

export default class SnapShot extends React.Component{
    render(){
      return (
              <View style={styles.item}>
                  <Text>ABCS</Text>
              </View>
        );
    }
  }
  const styles = StyleSheet.create({
    item:{
      flex:1,
      height:'100%',
      borderBottomColor:'red',
      borderBottomWidth: 2
    }
  })