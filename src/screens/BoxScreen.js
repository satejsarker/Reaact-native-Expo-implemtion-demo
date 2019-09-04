import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> childNUmber: 1 </Text>
            <Text style={styles.textStyle}> childNUmber:2 </Text>
            
            <Text style={styles.textStyle}> childNUmber: 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:4 ,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-arouncd',
        height:200

    },
    textStyle:{
        borderWidth:1,
        borderColor:'red',
       
    }
});
export default BoxScreen
