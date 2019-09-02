import React,{useReducer} from 'react'
import { View, Text } from 'react-native';
import { Button,Title} from 'react-native-paper'

const Counter = () => {
    const counterReducer = (state, action) => {
        switch (action.type) {
            case 'INCREASE_COUNT':
                return {...state,count:state.count+1}
            case "DECREMENT_COUNT":
                    return  state.count>0?{...state,count:state.count-1}:state
            default:
                return state
        }
    }
     const [state, dispatch] = useReducer(counterReducer, {count:0})
     const {count}=state;
    return ( <View>
        <Button style={{alignSelf: 'center',}} onPress={()=>{
            dispatch({type:"INCREASE_COUNT"})
          
        }}>+</Button>
        <Button style={{alignSelf: 'center',}} onPress={()=>{
            dispatch({type:"DECREMENT_COUNT"})
        }}>-</Button>
            <Title style={{alignSelf:'center'}}>Counter value: {count}</Title>
        </View> )
}

export default Counter
