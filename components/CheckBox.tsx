import { useState } from 'react';
import {  Text, View ,StyleSheet, TouchableOpacity,Image, ImageSourcePropType} from 'react-native';
interface checkBoxProps{
    image:ImageSourcePropType
    text:string
    textColor:string
    borderColor:string
    backgroundColor:string
    sizeBox:number
    sizeImage:number


}

export default function CheckBox({textColor,sizeImage,backgroundColor,borderColor,image,text,sizeBox}:checkBoxProps) { 
    const [enable,setEnable]=useState(false)
    function handleCheck() {
      setEnable(!enable)
    }
  return (
    <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={handleCheck} style={{backgroundColor:backgroundColor,borderColor:borderColor,width:sizeBox,height:sizeBox,alignContent:"center",justifyContent:"center",padding:5}}>
            {enable?<Image source={image} style={{ width:sizeImage,height:sizeImage}}></Image>:<Text></Text>}
        </TouchableOpacity>
        <Text style={{color:textColor,marginLeft:5,fontWeight:"700"}}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    
    image:{
      width:10,height:10
    }
   
  });
  