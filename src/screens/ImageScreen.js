import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import ImageDetails from '../Components/ImageDetails';

let images=[
    {title:"forest", "img":'https://www.searanchescape.com/wp-content/uploads/2019/05/ca9721.jpg'},
    {title:"mountain", "img":'https://s.yimg.com/ny/api/res/1.2/Xng58DgN4dojDt_4zoYBAA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/digital_trends_973/52a5e65852832306c7f61765b6149a71'},
    {title:"beach", "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqd_wuDb4Ah5Mt0VQkM2C-CuULNsFVqG60HnIODOGD2kUS52Mgw'},
  
  ]

const imageListDisplay=()=>{
    return (images.map(({title,img})=>{
        return(
        <TouchableOpacity  key={title}>
          <ImageDetails title={title} img={img}/>
        </TouchableOpacity>
        )
    }))
}  

const ImageScreen = () => {
    return (
        <ScrollView contentContainerStyle={{alignContent:"center", alignItems:"center"}}>
{imageListDisplay()}    
  </ScrollView>
    )
}
const styles = StyleSheet.create({
    viewImage:{
        alignItems:"center",
        flexDirection:'row'
    },
    ImageList:{

    }
});

export default ImageScreen
