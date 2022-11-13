import React from "react";
import { View ,Text,FlatList} from "react-native";
import { Colors } from "../Colors";
import Card from "./Card";

function Section() {
    const list=[{id:1,txt:"aaa"},{id:2,txt:"fff"},{id:21,txt:"fff"},{id:23,txt:"fff"},{id:122,txt:"fff"}]
    return ( 
        <View style={{alignItems:"flex-start",marginTop:10}}>
            <Text style={{color:Colors.white,fontSize:20,fontWeight:"700",marginBottom:5}}>Popular</Text>
            <FlatList data={list} horizontal style={{}} 
            renderItem={({item})=>(<Card key={item.id}></Card>)}/>
        </View>
     );
}

export default Section;