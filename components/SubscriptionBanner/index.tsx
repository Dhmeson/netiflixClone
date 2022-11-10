import {  Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from '../../Colors';
export default function SubscriptionBanner() { 
  return (
      <View style={styles.container}>
        <Text style={styles.txtOne}>novo</Text>

        <View>
          <Text style={styles.txtTwo}>Planos a partir de</Text>
          <Text style={styles.txtPrice}>R$ 19,99</Text>
        </View>
        <TouchableOpacity style={styles.ConteinerButton}>
          <Text style={styles.txtButton}>Saiba mais</Text>
          <Text style={styles.txtIcon}>{">"}</Text>
        </TouchableOpacity>
       
   
      </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    width:"100%" ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    display:'flex',
    flexDirection:'row',padding:10
  },
  txtOne:{
    backgroundColor:Colors.red,
    padding:8, borderRadius:30,paddingLeft:15,paddingRight:15,color:Colors.white,
    fontWeight:"700"
  },
  txtTwo:{
    color:Colors.gray100,fontWeight:"700"
  },
  txtPrice:{
    color:Colors.black,
    fontWeight:"700"
  },
  txtButton:{
    color:Colors.blue, fontWeight:"700"
  },
  txtIcon:{
    color:Colors.blue,
    fontSize:25,
    marginLeft:5
  },
  ConteinerButton:{
    display:'flex' ,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    
    
    
  }

});

