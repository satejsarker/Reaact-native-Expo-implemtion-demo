import React from 'react'
import { View, Text,FlatList , StyleSheet} from 'react-native'
import { List } from "react-native-paper";

const ListScreen = () => {
    const listFriend=[
        {name:'satej',id:1},
        {name:'sarker ',id:2},
        {name:'gunjan',id:3},
        {name:'arun',id:4},
        {name:'das',id:5},
        {name:'samir',id:6},
        {name:'sarker',id:7},
        {name:'shandha',id:8},
        ]
    return (
        <View>
            <FlatList  data={listFriend} keyExtractor={friend=>friend.name}
            renderItem = {({ item }) =>
         (  <List.Item
            title={item.name}
            description="Item description"
            left={props => <List.Icon {...props} icon="person" />}
          />
         )
        }
            extraData={listFriend}/>
        </View>
    )
}


const styles = StyleSheet.create({
    listView:{
        alignItems:'center',
        fontSize:14
    }
})

export default ListScreen
