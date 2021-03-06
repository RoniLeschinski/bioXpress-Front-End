import React, {Component, useState, useEffect, useContext} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import {ProductsService} from '../services/products_service';
import {AuthContext} from '../src/Context/auth_context';
import ItemConfirmSale from '../components/ItemConfirmSale';

export default function ConfirmSale({navigation, route}, props) {

  const {item} = route.params;
  const {token, idLocal} = useContext(AuthContext);

  const updateCart = async (status) => {
    const service = new ProductsService();
    var products = await service.updateCartStatus(token, status, item.id_cart);
    navigation.navigate("Home Vendedor")
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'other'} press={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={{fontWeight: '600', fontSize: 20, color: '#4B4B4B'}}>
            {Object.keys(item.products).length}
          </Text>
          <Text style={{fontWeight: '600', fontSize: 20, color: '#4B4B4B'}}>
            {' '}
            producto(s) -{' '}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4B4B4B'}}>
            $
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4B4B4B'}}>
            {item.total_price}
          </Text>
        </View>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <FlatList
              style={{width: '100%'}}
              contentContainerStyle={{alignItems: 'center'}}
              data={item.products}
              renderItem={({item}) => {
                return (
                  <ItemConfirmSale
                    titulo={item.title}
                    precio={item.price}
                    index={item.key}
                    img={item.path}
                    off={item.off}
                    isOffer={item.isOffer}
                    cant={item.quantity}
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
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            flexDirection:'row'
          }}>
          <TouchableOpacity
            style={[styles.boton, {backgroundColor: '#D9318C'}]}
            activeOpacity={0.7}
            onPress={()=>updateCart(3)}>
              <Image source={require('../assets/images/decline.png')} style={{width:60, height:60, marginTop:10}}/>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>
              Rechazar Compra
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.boton, {backgroundColor: '#38CB6C'}]}
            activeOpacity={0.7}
            onPress={()=>updateCart(2)}>
            <Image source={require('../assets/images/confirm.png')} style={{width:60, height:60, marginTop:10}}/>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>
              Aceptar Compra
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderBottomWidth: 0.4,
    borderBottomColor: '#D9D9D9',
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '40%',
    padding:10,
    marginBottom:20,
    marginHorizontal:10
  },
});
