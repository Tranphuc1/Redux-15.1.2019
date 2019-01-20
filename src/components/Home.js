import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FlatListItems from './FlatListItems';
import { connect } from 'react-redux';
const initState = {
  data: [],
  page: 1,
  refreshing: false
};

class HomeScreenDetail extends React.Component {
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

  state = initState;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadMoreData();
  }

  loadMoreData = () => {
    const { page } = this.state;
    return fetch(`https://smap-moma-staging.herokuapp.com/api/tasks/getTaskNotCompleted?page=${page}&limit=20&task_name=&from_date=2018/12/1&to_date=2018/12/30&task_type=0&task_status=0`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: [...this.state.data, ...responseJson.data],
          refreshing: false
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          refreshing: false
        })
      })
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    },
      () => {
        this.loadMoreData()
      }
    );
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true,
      page: 1,
      data: []
    },
      () => {
        this.loadMoreData()
      }
    );
  }

  onPress = (item) => () => {
    this.props.navigation.navigate('UserProfile');
    this.props.dispatch({ type: 'UP_DATA', item: item });
  }

  onPicker = () => {
    this.props.navigation.navigate('ImagePickers');
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View>
          <TouchableOpacity onPress={this.onPicker}>
            <Text>Picker</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList
          data={this.state.data}
          renderItem={({ item, index }) =>
            <View style={styles.item}>
              <FlatListItems item={item} onPress={this.onPress(item)} />
            </View>
          }
          keyExtractor={(item) => item.id}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        /> */}
      </View>
    );
  }
}
export default connect()(HomeScreenDetail);
const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})