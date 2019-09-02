import React,{useState} from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import { Button ,Container} from 'react-native-paper';


const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
          <Button onPress={()=>{
             setColors([...colors,randomRgb()])
             
          }}>Add Color:</Button>
      
          <FlatList keyExtractor={item=>item} data={colors} renderItem={({item})=>{
            //item rgb
            return <View style={{height:100,width:100,backgroundColor:item,alignSelf:"center"}}/>
          }}/>
        </View>
    )
}
const randomRgb=()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({
    
});

export default ColorScreen
