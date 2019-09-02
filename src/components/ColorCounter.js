import React from 'react'
import { View, Text } from 'react-native'
import { Button, Title } from 'react-native-paper';

const ColorCounter = ({color,onIncrease,onDecrease}) => {
  
    return (
        <View>
            <Title  style={{alignSelf:'center',color:`${color.toLocaleLowerCase()}`}}>{color}</Title>
            <Button mode='contained' onPress={()=>onIncrease()} color={`${color.toLocaleLowerCase()}`}>{`Increase ${color}`}</Button>
            <Button mode='outlined' onPress={()=>onDecrease()} color={`${color.toLocaleLowerCase()}`}>{`Dncrease ${color}`}</Button>
        </View>
    )
}

export default ColorCounter
