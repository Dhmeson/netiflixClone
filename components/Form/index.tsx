import {  Text, View,StyleSheet,ImageBackground, Image,TouchableOpacity, TextInput, SafeAreaView, ToastAndroid } from 'react-native';
import { Colors } from '../../Colors';
import backGroundMovies from "../../assets/backMovies.jpg"
import arrow from "../../assets/arrow.png"
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CredentialsCtx } from '../../context/credetials';
import { ToastMessage } from '../ToastMessage';

export default function Form() { 
  const VALIDATION_EMAIL=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const navigation=useNavigation()
  const ctx =useContext(CredentialsCtx)
  const [email,setEmail]=useState("")

  function createAcount(){
    if(VALIDATION_EMAIL.test(email)){
      ctx.email=email
      navigation.navigate("new-acount")

    }
    else{ ToastMessage({text:"Invalid email!"})} 
  }
  return (
      <View style={styles.container} >
        <ImageBackground style={styles.image} source={backGroundMovies} resizeMode="cover"> 
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.title}>FakeFlix</Text>
              <View  style={styles.language}>
                <Text style={styles.txt}>Portugues</Text>
                <Image source={arrow} style={styles.icon} ></Image>
              </View>

            <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate("auth")}>
              <Text style={styles.txt}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mid}>
            <Text style={{fontSize:25,textAlign:"center",color:Colors.white,fontWeight:"700",marginTop:5}}>Filmes, séries e muito mais. Sem limites. </Text>
            <Text style={{fontSize:16,textAlign:"center",color:Colors.white,fontWeight:"700",marginTop:10}}>Assista onde quiser. Cancele quando quiser.</Text>
            <Text style={{fontSize:18,textAlign:"center",color:Colors.white,fontWeight:"700",marginTop:10}}>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</Text>
            <SafeAreaView>
              <TextInput onChangeText={setEmail} style={{width:300,height:35,backgroundColor:Colors.white,fontSize:15,padding:4,marginTop:20}}  placeholder="Email" keyboardType='email-address' autoCapitalize='none' />
              <Text style={{color:"#D4D438",fontWeight:"700",marginTop:2}}>O email obrigatorio</Text>
              <TouchableOpacity  style={{backgroundColor:Colors.red,padding:10,marginTop:10}} onPress={()=>createAcount()}>
              <Text style={{color:Colors.white,textAlign:"center"}}>Vamos lá</Text>
            </TouchableOpacity>
            </SafeAreaView>
          </View>
        
        </View>

        </ImageBackground>

       
        
        
      
      </View>
      
  
  );
}
const styles = StyleSheet.create({
  container: {
    width:"100%" ,
    maxHeight:450 ,
    justifyContent: 'space-around',
    display:'flex',
    flexDirection:'row',padding:1,borderBottomWidth:5,borderColor:Colors.gray700
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',opacity:0.8,zIndex:2
  },
  icon:{
    width:20,height:20,marginLeft:2
  },
  title:{
    fontSize:30,
    fontWeight:"700",
    color:Colors.red,
    marginLeft:10,
  },
  header:{
    display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",minHeight:70,
    padding:10
  },
  
  language:{
    display:'flex',flexDirection:"row",backgroundColor:Colors.black,
    paddingLeft:10,paddingRight:10,padding:5,borderColor:Colors.gray100,borderWidth:1,borderRadius:3
  },
  txt:{
    color:Colors.white,fontWeight:"700"
  },
  btn:{
    backgroundColor:Colors.red,padding:5,borderRadius:5,paddingLeft:10,paddingRight:10,marginRight:5
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  main:{
    position:'relative' ,display:'flex',flexDirection:"column",alignItems:"center",width:"100%",height:"100%",
    backgroundColor:Colors.black,padding:10
  },
  mid:{
    width:"100%",height:"90%",display:"flex",alignItems:"center",
    padding:10
  }
  
  

});

