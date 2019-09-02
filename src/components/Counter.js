import React,{useState} from 'react'
import { View, Text } from 'react-native';
import { Button} from 'react-native-paper'

const Counter = () => {
    const [Counter, setCounter] = useState(0);
    return ( <View>
        <Button style={{alignSelf: 'center',}} onPress={()=>{
            setCounter(Counter +1)
        }}>+</Button>
        <Button style={{alignSelf: 'center',}} onPress={()=>{
            if(Counter>0) setCounter(Counter -1)
        }}>-</Button>
            <Text>Counter value: {Counter}</Text>
        </View> )
}

export default Counter
