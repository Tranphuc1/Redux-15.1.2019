import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreenDetail from './src/components/Home';
import ImagePickers from './src/components/ImagePickers';
import UserProfileScreen from './src/components/UserProfile';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Login from './src/components/Login';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

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
  ImagePickers :ImagePickers,
  Login : Login,
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: () => ({
      title:'BacktoHomeDetail'
    }),
  }
});
const AppContainer = createAppContainer(AppNavigator);