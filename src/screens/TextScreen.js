import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { TextInput, Title, } from 'react-native-paper';

const TextScreen = () => {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("")
    return (
        <View>
            <Text style={{alignSelf:'center'}}>User Text Input</Text>
            <TextInput onChangeText ={newVal=>setName(newVal) 
            } autoCapitalize='none' label="Enter your USername" value={name} autoCorrect={false} />
            <TextInput onChangeText ={newVal=>setPassword(newVal) 
            } autoCapitalize='none' label="Enter Password"secureTextEntry={true } value={Password} autoCorrect={false} />
            <Title style={{alignSelf: 'center',}}> Your Name: {name}</Title>
        </View>
    )
}

export default TextScreen
