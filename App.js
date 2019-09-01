import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { Component } from 'react';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/Components/Counter';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


const navigator = createStackNavigator(
  {
    Home: {
      screen:HomeScreen,
      navigationOptions:{
        title:"Home"
      }
    },
    Counter:{
      screen:Counter,
      navigationOptions:{
        title:"Counter "
      }
    },
    List:ListScreen,
    Image: {
      screen:ImageScreen,
      navigationOptions: {
        title: 'Image Screen',
        headerStyle: { backgroundColor: '#3a59b7' },
        headerTintColor: '#ffffff',
      }
  }},

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
      headerTintColor:"white",
    
      headerStyle: {
          backgroundColor:"indigo",
          alignContent:"center",
    
      },
      footerStyle:{
        backgroundColor:"indigo",
      }
      
    }
  }
);




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PaperProvider
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}
    >
          <AppContainer />
      </PaperProvider>
   
    );
  }
}


const AppContainer= createAppContainer(navigator);
export default App
