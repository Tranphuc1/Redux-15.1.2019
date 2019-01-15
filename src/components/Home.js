/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList,StyleSheet, View,Text,Button,TouchableOpacity} from 'react-native';

export default class HomeScreenDetail extends React.Component {
    static navigationOptions = {
    title: 'HomeScreenDetail',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props);
    this.state={
      data: [],
      page:1,
      refreshing: false
    }
  }
  componentWillMount(){
    this.loadMoreData();
  }
  loadMoreData=()=>{
  const {page} = this.state;
    return fetch(`https://smap-moma-staging.herokuapp.com/api/tasks/getTaskNotCompleted?page=${page}&limit=20&task_name=&from_date=2018/12/1&to_date=2018/12/30&task_type=0&task_status=0`)
    .then ((response)=> response.json())
    .then((responseJson)=>{
        this.setState({
          data:[...this.state.data,...responseJson.data],
          refreshing:false
        });        
    })
    .catch((error)=>{
      console.log(error)
      this.setState({
        refreshing:false
      })
    })
  }
  handleLoadMore =() =>{
    this.setState({
      page:this.state.page + 1
    },
    ()=>{
      this.loadMoreData()
    }
    );
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true,
      page:1,
      data:[]
    },
      ()=>{
        this.loadMoreData()
      }
      );
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}> 
        
        <FlatList
        data={this.state.data}
        renderItem={({item,index}) =>
            <View style={styles.item}>
              <TouchableOpacity onPress ={  onPress= () =>{
                  this.props.navigation.navigate('UserProfile', {
                    item:item
                  });
                }}>
                <Text> TASK_CODE:{item.task_code} </Text>
                <Text>DESCRIPTION:{item.description}</Text>
                <Text>NAME:{item.task_name}</Text>
                <Text>Created_at:{item.created_at}</Text>
              </TouchableOpacity>
            </View>
        }
          keyExtractor={(item) => item.id}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item:{
    flex:1,
    height:'100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})
// const AppNavigator = createStackNavigator({
//   HomeDetail: HomeScreenDetail,
//   UserProfile: {
//     screen: UserProfileScreen,
//     navigationOptions: () => ({
//       headerBackTitle:null
//     }),
//   }
// });
// export default createAppContainer (AppNavigator);