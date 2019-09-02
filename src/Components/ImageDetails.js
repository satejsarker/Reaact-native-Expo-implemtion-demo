import React from 'react'
import { View, Text ,Image ,ScrollView} from 'react-native'
import { Title } from 'react-native-paper';


const ImageDetails = ({title,img}) => {
    console.log(img)
    return (
        <View>
            <Image source={{ uri:img}}    style={{ width: 400, height: 390, margin: 0 }}/>
            <Title style={{alignSelf:'center'}}>{title.toUpperCase()}</Title>
        </View>
    )
}

export default ImageDetails
