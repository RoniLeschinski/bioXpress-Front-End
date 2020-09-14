import React, {Component, useContext} from 'react';
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
  Modal,
} from 'react-native';
import Header from '../components/Header'
import BtnMiCompra from '../components/BtnMiCompra'
import ItemCarrito from '../components/ItemCarrito'
import {ProductContext} from '../src/Context/product_context';


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

export default function ModalCarrito(props) {
  const {cantTot, setCantTot, precioTot, setPrecioTot, cart, setCart} = useContext(ProductContext);
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <BtnMiCompra isChome={false} press={props.press} cant={props.cant} price={props.price}/>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <FlatList
              style={{width: '100%'}}
              contentContainerStyle={{alignItems: 'center'}}
              data={props.carrito}
              renderItem={({item}) => {
                return (
                  <ItemCarrito
                    titulo={item.titulo}
                    precio={item.precio}
                    vendedor={item.vendedor}
                    index={item.key}
                    img={item.img}
                    off={item.off}
                    isOffer={item.isOffer}
                    cantidad={item.cantidad}
                    off={item.off}
                  />
                );
              }}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 120,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity style={styles.boton} activeOpacity={0.7} onPress={props.press2}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    boton:{
        backgroundColor:"#0D93FF",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        width:"90%",
        height:85,
    
    },
    });
