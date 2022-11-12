import { View,Text } from "react-native";
import { Colors } from "../Colors";

interface helpTextlist{
    text1:string
    text2:string
    text3:string
}
function HelpListView({text1,text2,text3}:helpTextlist) {
    return ( 
    <View style={{justifyContent:"space-around",minHeight:100}}>
        <Text style={{color:Colors.gray100,fontWeight:"700",fontSize:13}}>{text1}</Text>
        <Text style={{color:Colors.gray100,fontWeight:"700",fontSize:13}}>{text2}</Text>
        <Text style={{color:Colors.gray100,fontWeight:"700",fontSize:13}}>{text3}</Text>
    </View>
     );
}

export default HelpListView;