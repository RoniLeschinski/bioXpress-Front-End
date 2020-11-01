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
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import ItemCat from '../components/ItemCat';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import BtnMiCompra from '../components/BtnMiCompra';
import {ProductsService} from '../services/products_service';
import {AuthContext} from '../src/Context/auth_context';
import ModalCarrito from './ModalCarrito';

var sellerprod = [
  {
    key: 0,
    img: require('../assets/images/products/huevos.png'),
    titulo: 'Docena de huevos pastoriles',
    precio: 420,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Huevos pastoriles provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
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
  },
];

export default function Search({navigation}) {
  const {token} = useContext(AuthContext);

  const [introtxt, setIntroTxt] = useState('');
  const [prods, setProds] = useState([]);

  const fetchProducts = async () => {
    const service = new ProductsService();
    var products = await service.fetchSearch(token, introtxt);
    setProds(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [introtxt]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ececec'}}>
        <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#38CB6C',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
              marginLeft: 15,
            }}>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <Image
                style={{width: 30, height: 30, alignSelf: 'center'}}
                source={require('../assets/images/back.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginRight: 15,
              width: '80%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                borderColor: '#d9d9d9',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 15,
                fontSize: 18,
              }}
              selectionColor="#9de0b5"
              keyboardType="default"
              blurOnSubmit={false}
              onChangeText={chng => setIntroTxt(chng)}
              returnKeyType="search"
              clearButtonMode="while-editing"
              placeholder="Buscar en bioXpress..."
              multiline={false}
            />
          </View>
        </View>
        {introtxt ? (
          <View>
            <View style={styles.orderbox}>
              <TouchableOpacity activeOpacity={0.7} style={styles.orderbutton}>
                <Image
                  style={{width: 20, height: 20, alignSelf: 'center'}}
                  source={require('../assets/images/ordenar.png')}
                />
                <Text style={styles.obuttontext}>Ordenar</Text>
              </TouchableOpacity>
              <View
                style={{width: 1, height: '60%', backgroundColor: '#d9d9d9'}}
              />
              <TouchableOpacity activeOpacity={0.7} style={styles.orderbutton}>
                <Image
                  style={{width: 20, height: 20, alignSelf: 'center'}}
                  source={require('../assets/images/filtrar.png')}
                />
                <Text style={styles.obuttontext}>Filtrar</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                flexDirection: 'row',
              }}>
              <FlatList
                data={prods}
                keyExtractor={(item, index) => item.id_product}
                renderItem={({item}) => {
                  return (
                    <ItemCat
                      index={item.id_product}
                      img={item.path}
                      title={item.title}
                      price={item.price}
                      press={() => {
                        navigation.navigate('Producto', {item: item});
                      }}
                    />
                  );
                }}
                numColumns={2}
                contentContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: 200,
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.text}>¡Todavía no buscaste nada!</Text>
            <Text style={styles.text2}>
              Buscá algún producto de tu interés.
            </Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#4b4b4b',
    fontWeight: 'bold',
    fontSize: 36,
    width: '60%',
    textAlign: 'center',
  },
  text2: {
    color: '#a6a6a6',
    fontWeight: 'normal',
    fontSize: 18,
    width: '60%',
    textAlign: 'center',
  },
  orderbox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
  },
  orderbutton: {
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 60,
    paddingRight: 60,
  },
  obuttontext: {
    color: '#0D93FF',
    fontSize: 16,
  },
});
