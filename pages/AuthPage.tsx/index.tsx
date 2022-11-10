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
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <CheckBox backgroundColor='#B3B1B1' borderColor='#B3B1B1' image={checkImage} text="Lembre-se de mim" sizeBox={20} sizeImage={10} textColor="#E1DFDF"/>
        <Text style={styles.txt}>Precisa de ajuda?</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:30}}>
      <Text style={{color:Colors.gray100,fontSize:15,fontWeight:"700",textAlign:"center"}}>Novo por aqui? </Text>
      <Text style={{color:Colors.white,fontSize:15,fontWeight:"700",textAlign:"center"}}>Assine agora </Text>
      </View>
      <Text style={{color:Colors.gray100,fontSize:14,fontWeight:"700",textAlign:"left",marginTop:20}}>
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. 
      </Text>
      <View style={{borderTopWidth:2,borderColor:Colors.gray100,marginTop:50}}>
      <Text style={{color:Colors.gray100,fontSize:14,fontWeight:"700",textAlign:"left",marginTop:30}}>
        Dúvidas? Ligue  0800 0000 0000
      </Text>
      <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
      <View style={{justifyContent:"space-around",minHeight:110}}>
        <Text style={styles.txt}>Perguntas frequentes</Text>
        <Text style={styles.txt}>Termos de Uso</Text>
        <Text style={styles.txt}>Preferências de cookies</Text>
      </View>
      <View style={{justifyContent:"space-around",minHeight:110,marginLeft:40}}>
        <Text style={styles.txt}>Central de Ajuda</Text>
        <Text style={styles.txt}>Privacidade</Text>
        <Text style={styles.txt}>Informações corporativas</Text>
      </View>
      </View>
     

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
    width:"100%" ,backgroundColor:Colors.red,minHeight:50,marginBottom:15,borderRadius:6,justifyContent:"center",marginTop:15
  },
  txt:{
    color:Colors.gray100,fontWeight:"700",fontSize:13
  }
});
