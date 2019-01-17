import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreenDetail from './src/components/Home';
import UserProfileScreen from './src/components/UserProfile';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/taskReducer';

const store = createStore(reducer);
export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
const AppNavigator = createStackNavigator({
  HomeDetail: HomeScreenDetail,
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: () => ({
      title:'BacktoHomeDetail'
    }),
  }
});
const AppContainer = createAppContainer(AppNavigator);