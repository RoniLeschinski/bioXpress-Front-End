import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ventas from '../components/Ventas';
import ItemCard from '../components/ItemCard';
import Header from '../components/Header'



var recos = [
  {
    key: 0,
    img: require('../assets/images/products/huevos.png'),
    titulo: 'Docena de huevos pastoriles',
    precio: 420,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Huevos pastoriles provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
  {
    key: 1,
    img: require('../assets/images/products/sup.png'),
    titulo: 'Suprema de pollo',
    precio: 300,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Pollo pastoril proveniente de La Pampa, distribuido por COECO y llevado a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
  {
    key: 2,
    img: require('../assets/images/products/huevos.png'),
    titulo: 'Docena de huevos pastoriles',
    precio: 420,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Huevos pastoriles provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
  {
    key: 3,
    img: require('../assets/images/products/sup.png'),
    titulo: 'Suprema de pollo',
    precio: 300,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Pollo pastoril proveniente de La Pampa, distribuido por COECO y llevado a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
];

function verMas({index, navigation}) {
return (
  <TouchableOpacity
    style={{
      width: 129,
      height: 129,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#d9d9d9',
      marginLeft: 20,
    }}
    activeOpacity={0.7}>
    <Image
      style={{width: '60%', height: '60%'}}
      source={require('../assets/images/mas.png')}
    />
    <Text
      style={{
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
        color: '#4b4b4b',
      }}>
      Ver más
    </Text>
  </TouchableOpacity>
);
}



export default function VHome({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header screen={"VHome"} press={() => navigation.openDrawer()}/>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{paddingBottom: 120, backgroundColor: '#ececec'}}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />
          <View style={styles.container4}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>navigation.navigate("NewPub")}>
              <Image source={require('../assets/images/masBlanco.png')} style={{width:75, height:75, marginRight:20}}/>
              <Text style={styles.text2}>Crear nueva publicación</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Ventas pendientes</Text>
          <View style={styles.container2}>
            <Ventas />
          </View>
          <Text style={styles.text}>Mis productos</Text>
          <View style={styles.container3}>
          <FlatList
              data={recos}
              renderItem={({item}) => {
                return (
                  <ItemCard
                    isChome={true}
                    index={item.key}
                    img={item.img}
                    off={item.off}
                    isOffer={item.isOffer}
                  />
                );
              }}
              contentContainerStyle={{
                paddingRight: 30,
                paddingLeft: 10,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              ListFooterComponent={verMas}
            />
          </View>
          <Text style={styles.text}>Ventas concretadas</Text>
          <View style={styles.container3}>
          <Ventas />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    //justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 139,
    marginTop: 20,
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 139,
    marginTop: 20,
  },
  container4:{
    width:"100%",
    height:"20%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ececec"
  },
  text: {
    color: '#4B4B4B',
    fontWeight: 'bold',
    //fontFamily: "Montserrat-Black",
    fontSize: 24,
    marginLeft: 30,
    marginTop: 30,
  },
  text2:{
    fontSize:21,
    fontWeight:"bold",
    color:"#fff"
  },
  scroll: {
    flex: 1,
  },
  scroll2: {
    paddingLeft: 5,
  },
  product: {
    width: 129,
    height: 129,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
  },
  list: {
    marginTop: 20,
  },
  button: {
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    width:"90%",
    height:"80%",
    backgroundColor:"#0D93FF",
    borderRadius:20,
  }
});
