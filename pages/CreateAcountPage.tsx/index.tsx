import {  Text, View, TextInput,TouchableOpacity ,StyleSheet,KeyboardAvoidingView,} from 'react-native';
import { Colors } from '../../Colors';
import { useContext, useEffect, useState } from 'react';
import HelpListView from '../../components/HelpListView';
import { CredentialsCtx } from '../../context/credetials';
import { ToastMessage } from '../../components/ToastMessage';
export default function CreateAcountPage({navigation}:any) { 
  const VALIDATION_EMAIL=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const ctx =useContext(CredentialsCtx)
  useEffect(()=>{
    setEmail(ctx.email)
  },[])

  function handleLogin(){
    if(VALIDATION_EMAIL.test(email) && password.length>=5){
      ToastMessage({text:"Account created successfully"})
      navigation.navigate("movies")

    }
    else if(password.length<5){
      ToastMessage({text:"Password must contain 5 characters "})
    }
    else{
      ToastMessage({text:"Invalid email or password"})
    }
   
    
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"#DFCBBA",paddingBottom:10}}>
        <Text style={{color:Colors.red,fontSize:20,fontWeight:"700",marginTop:10}}>FAKEFLIX</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("auth")}>
        <Text style={{color:Colors.black,fontSize:15,fontWeight:"700",marginTop:10}}>Entrar</Text>
        </TouchableOpacity>
       
      </View>

      <View style={{justifyContent:"space-between",height:"100%"}}>

      <View >
        <Text style={{color:Colors.black,fontSize:30,fontWeight:"700",marginTop:10,marginBottom:20}}>Crie uma senha para iniciar sua assinatura</Text>
        <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder='Email' keyboardType='email-address' autoCapitalize='none'/>
        <TextInput secureTextEntry onChangeText={setPassword} value={password}  style={styles.input} placeholder='Senha'/>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={{color:Colors.white,fontSize:20,fontWeight:"700",textAlign:"center"}}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderTopWidth:2,borderColor:Colors.gray100,minHeight:300}}>
      <Text style={{color:Colors.gray700,fontSize:14,fontWeight:"700",textAlign:"left",marginTop:25}}>
        Dúvidas? Ligue  0800 0000 0000
      </Text>
      <View style={{flexDirection:"row",width:"100%",marginTop:5,justifyContent:"space-around"}}>
        <HelpListView text1='Perguntas frequentes' text2='Termos de Uso' text3='Preferências de cookies'/>
        <HelpListView text1='Central de Ajuda' text2='Privacidade' text3='Informações corporativas'/>
      </View>
     
      </View>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding:20
 
  },
  input:{
    width:"100%" ,backgroundColor:Colors.white,minHeight:50,marginBottom:15,paddingLeft:10,fontSize:16,borderColor:"#9c928a",borderWidth:1
  },btn:{
    width:"100%" ,backgroundColor:Colors.red,minHeight:50,marginBottom:15,borderRadius:6,justifyContent:"center",marginTop:15
  },

});
