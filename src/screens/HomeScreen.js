import React from 'react';
import { Text, StyleSheet ,View,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const pressButton=()=>{
console.log("button pressed-homeScreen")

  }
  return (<View style={styles.HomeScreenView}>
   <Button icon="list" mode='contained' color="green" onPress={()=>navigation.navigate('List')}>List Screen</Button>
    <Button icon="image" mode='contained' color="yellow" onPress={()=>navigation.navigate('Image')}>Image Screen</Button>
    <Button icon="forward" mode='contained' color="indigo" onPress={()=>navigation.navigate('Counter')}>Counter Screen</Button>
    <Button icon="camera" mode='contained' color="white" onPress={()=>navigation.navigate('ColorScreen')}>Color Screen</Button>
    <Button icon="book" mode='contained' color="white" onPress={()=>navigation.navigate('SquareScreen')}>Square Screen</Button>
    <Button  mode='contained' color="black" onPress={()=>navigation.navigate('TextScreen')}>Text Screen</Button>
    <Button  mode='contained' color="white" onPress={()=>navigation.navigate('BoxScreen')}>Box Screen</Button>
    <TouchableOpacity onPress={pressButton()}>
      <Text>HomeScreen</Text>
    </TouchableOpacity>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  HomeScreenView:{
    alignContent:'center',
    justifyContent: 'space-between',
  },
  container:{
    flex:1,
    flexDirection: 'row',
  }
});

export default HomeScreen;
