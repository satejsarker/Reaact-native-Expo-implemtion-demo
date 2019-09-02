import React ,{useState} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';



const Counter = () => {
    const [counter, setcounter] = useState(0);
    return (
        <View>
     <Button  style={{fontSize: 50,}} mode='text' onPress={()=>{
         setcounter(counter+1)
     }}>+</Button>
     <Button   mode='text' onPress={()=>{
         if(counter>0) setcounter(counter-1)
     }}>-</Button>
     <Text style={{alignContent:"center"}}>Cunter Vaalue:{counter}</Text>
        </View>
    )
}

export default Counter
