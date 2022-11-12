import { StatusBar } from 'expo-status-bar';
import {  Text, View,TouchableOpacity,ScrollView ,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../Colors';

import Banner from '../../components/Banner';
import Form from '../../components/Form';
import SubscriptionBanner from '../../components/SubscriptionBanner';
export default function Home() { 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent hidden={true}/>
      <SubscriptionBanner/>
      <ScrollView style={styles.scrollView}>
      <Form/>
      <Banner icon={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} title='Aproveite na TV.' describe='Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.'/>
      <Banner icon={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"} title='Assista quando quiser.' describe='Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.'/>
      <Banner icon={"https://occ-0-3816-559.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABWGB3YOpSh2wA7OOZQYD-MkalQ0oJEy-YEEpoPKAIenLtZf5lKeERDdKj-u6WnZx9wx_QuiDVHkGM_1QmVQt9yxM7mKjevBNHKFz.png?r=1b8"} title='Crie perfis para crianças.' describe='Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.'/>
      <Banner icon={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} title='Baixe séries para assistir offline.' describe='Disponível em todos os planos, exceto no Básico com anúncios.'/>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  scrollView: {
    backgroundColor:Colors.black
  },
  
});