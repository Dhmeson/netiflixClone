import { View,Text, Image, ImageBackground } from "react-native";
import { Colors } from "../Colors";
import menu from "../assets/menu.png"

function Card() {
    return (  
        <ImageBackground resizeMode="cover" source={{uri:"https://occ-0-3816-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZGhR_X3AdS7qmRp8cgnYXejlJkXOiKFYlTAiliINlniACHjwMnoL8vCDjQS3HdrK9CjJLqwCrTv4c5Ul3VGKs24sctedbqKQE4.jpg?r=dcd"}}  style={{width:150,height:100,marginRight:2}}>
            
        </ImageBackground>
    );
}

export default Card;
