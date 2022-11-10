import {  Text, View, TextInput,TouchableOpacity ,StyleSheet,KeyboardAvoidingView,} from 'react-native';
import { Colors } from '../../Colors';
import CheckBox from '../../components/CheckBox';
import checkImage from '../../assets/check.png'
export default function AuthenticatePage() { 
  return (
    <View style={styles.container}>
      <Text style={{color:Colors.red,fontSize:20,fontWeight:"700",marginTop:10}}>FAKEFLIX</Text>
      <KeyboardAvoidingView>
        <Text style={{color:Colors.white,fontSize:30,fontWeight:"700",marginTop:10,marginBottom:10}}>Entrar</Text>
        <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Senha'/>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color:Colors.white,fontSize:20,fontWeight:"700",textAlign:"center"}}>Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <CheckBox backgroundColor='#B3B1B1' borderColor='#B3B1B1' image={checkImage} text="Lembre-se de mim" sizeBox={20} sizeImage={10} textColor="#E1DFDF"/>
        <Text style={styles.txt}>Precisa de ajuda?</Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding:20 
 
  },
  input:{
    width:"100%" ,backgroundColor:Colors.white,minHeight:50,marginBottom:15,borderRadius:6,paddingLeft:10,fontSize:16
  },btn:{
    width:"100%" ,backgroundColor:Colors.red,minHeight:50,marginBottom:15,borderRadius:6,justifyContent:"center"
  },
  txt:{
    color:Colors.gray100 
  }
});
