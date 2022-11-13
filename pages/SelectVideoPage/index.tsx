import {  Text, View ,StyleSheet, Image, TextInput,TouchableWithoutFeedback, Keyboard, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import menuIcon from '../../assets/menu.png'
import { Colors } from '../../Colors';
import Card from '../../components/Card';
import Section from '../../components/Section';


export default function SelectVideoPage() { 
  const list=[{id:1,txt:"aaa"},{id:2,txt:"fff"},{id:21,txt:"fff"},{id:23,txt:"fff"},{id:122,txt:"fff"}]
  return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <View style={styles.container}>
      {/**header */}
      <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
        <View style={{flexDirection:'row',width:'30%',justifyContent:"space-between"}}>
        <TouchableOpacity>
          <Image source={menuIcon} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.title}>Fakeflix</Text>
        </View>
        <TextInput placeholder='Buscar' style={styles.input} placeholderTextColor={'#E1DFDF'}></TextInput> 
      </View>
      {/**header */}
      <ScrollView style={styles.scroll}>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
      </ScrollView>
   

     
   </View>
   </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:Colors.black,padding:20
   
  },
  title: {
    color:Colors.red,fontSize:20,fontWeight:"700"
  },
  icon:{
    width:30 ,height:30

  },
  input:{
    borderWidth:2,borderColor:Colors.gray100,minWidth:150,color:Colors.white,paddingLeft:5
  },
  scroll:{
    marginTop:10,marginBottom:20
  }
  
});