import { View,Text } from "react-native";
import { Colors } from "../Colors";

function ErrorMsg() {
    return ( 
        <View style={{backgroundColor:"#E38739",width:"100%",height:70,padding:10,marginBottom:10,justifyContent:"center",alignItems:"center",borderRadius:5}}>
            <Text style={{fontWeight:"700",color:Colors.white}}>Desculpe, não encontramos uma conta com esse endereço de email. Tente novamente ou crie um nova conta </Text>
        </View>
     );
}

export default ErrorMsg;