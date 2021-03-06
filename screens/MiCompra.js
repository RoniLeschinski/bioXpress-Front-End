import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header'
import BtnMiCompra from '../components/BtnMiCompra'
import ItemCarrito from '../components/ItemCarrito'


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


export default function MiCompra({navigation}){
    return(
        <SafeAreaView style={{flex:1}}>
            <Header screen={"MiCompra"} press={() => navigation.openDrawer()}/>
            <BtnMiCompra isChome={false} press={() => navigation.goBack()}/>
            <ScrollView style={{backgroundColor:"#fff"}}>
                <View style={{alignItems:"center", width:"100%"}}>
                    <FlatList
                        style={{width:"100%"}}
                        contentContainerStyle={{ alignItems:"center"}}
                        data={recos}
                        renderItem={({item}) => {
                            return(
                                <ItemCarrito
                                titulo={item.titulo}
                                precio={item.precio}
                                vendedor={item.vendedor}
                                index={item.key}
                                img={item.img}
                                off={item.off}
                                isOffer={item.isOffer}
                                />
                            )
                        }} 
                        
                        />
                </View>
            </ScrollView>
            <View style={{width:"100%", height:120, alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
                <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
                    <Text style={{color:"#fff", fontWeight:"bold", fontSize:26}}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
boton:{
    backgroundColor:"#38CB6C",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    width:"90%",
    height:85,

},
});