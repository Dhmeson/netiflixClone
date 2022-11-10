
import {  Text, View,TouchableOpacity ,StyleSheet,Image} from 'react-native';
import { Colors } from '../../Colors';
interface bannerProps{
    title:string
    describe:string
    icon:string

}

export default function Banner({describe,title,icon}:bannerProps) { 
  return (
    <View style={styles.container}>
        <Text style={{color:Colors.white,fontSize:25,textAlign:"center",marginBottom:5,fontWeight:"700"}}>{title}</Text>
        <Text style={{color:Colors.white,fontSize:18,textAlign:"center",fontWeight:"700"}} >{describe}</Text>
        <Image style={{width:300,height:300}} source={{uri:icon}}></Image>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      width:"100%" ,
      alignItems:"center",
      display:'flex',
      flexDirection:'column',padding:20,borderBottomWidth:5,borderColor:Colors.gray700
      
    },
})