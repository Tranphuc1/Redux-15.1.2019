import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
export default class FlatListItems extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      item : this.props.item
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.item);
    console.log(prevState.item);
    if (nextProps.item !== prevState.item) {
      return { item: nextProps.item };
    }
    else return null;
  }

    render(){
      const { item } = this.props;
      return (
              <View style={styles.item}>
                <TouchableOpacity onPress={this.props.onPress}>
                  <Text>{item.id}</Text>
                  <Text>{item.task_code}</Text>
                  <Text>{item.task_name}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.created_at}</Text>
                </TouchableOpacity>
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