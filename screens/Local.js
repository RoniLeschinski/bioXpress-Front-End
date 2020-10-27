import React, {Component, useState, useEffect, useContext} from 'react';
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
import Recommended from '../components/Recommended';
import Header from '../components/Header'
import {apiBaseUrl} from '../utils/constants';
import {ProductContext} from '../src/Context/product_context';
import {AuthContext} from '../src/Context/auth_context';
import {ProductsService} from '../services/products_service';
import ItemCard from '../components/ItemCard';



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
  {
    key: 2,
    img: require('../assets/images/products/huevos.png'),
    titulo: 'Docena de huevos pastoriles',
    precio: 420,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Huevos pastoriles provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
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

export default function Local({navigation, route}){

  const {item} = route.params;

  const {token, idLocal} = useContext(AuthContext);

  const [info, setInfo] = useState()
  const [isLoading, setLoading] = useState(true);
  const [isLoadingProd, setLoadingProd] = useState(true);
  const [prods, setProds] = useState();

  const sourceVend = apiBaseUrl + '/' + item.store_pic

  const fetchInfo = async () => {
    const service = new ProductsService();
    var informacion = await service.fetchShopInfo(token, item.id_store);
    setInfo(informacion.data);
    setLoading(false)
  };

  const fetchProducts = async () => {
    const service = new ProductsService();
    var products = await service.fetchShopProducts(token, item.id_store);
    setLoadingProd(false);
    setProds(products);
  };

  useEffect(() => {
    fetchInfo()
    fetchProducts()
    console.log(info)
  }, [item]);

    return(
      <SafeAreaView style={{flex:1}}>
        <Header screen={"other"} press={() => navigation.goBack()}/>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 50,
          backgroundColor: '#ececec',
        }}>
          <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />
            <View style={styles.container2} />
            <View style={styles.imagecont}>
              <Image style={styles.image} source={{uri:sourceVend}} />
            </View>
            <View style={styles.container3}>
              <Text style={styles.text1}>{item.store_name}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "center", width: "100%"}}>
          <Text style={styles.text2}>VENDEDOR OFICIAL</Text>
          <Image
            style={styles.ico}
            source={require('../assets/images/verifico.png')}
          />
          </View>
          <View style={styles.container5}>
              <Text style={styles.text3}>Más productos del vendedor</Text>
            </View>
          <View style={styles.container4}>
          {!isLoadingProd ? (
                <FlatList
                  data={prods}
                  keyExtractor={(item, index) => item.id_product}
                  renderItem={({item}) => {
                    return (
                      <ItemCard
                        isChome={true}
                        index={item.id_product}
                        img={item.path}
                        off={item.off}
                        isOffer={item.isOffer} 
                        press={() => {
                          navigation.navigate('Producto', {item: item});
                        }}
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
              ) : (
                <ItemCard isChome={true} />
              )}
          </View>
          <View style={styles.container5}>
            {!isLoading ? (
              <View>
              <Text style={styles.text3}>Información del vendedor</Text>
              <Text style={styles.text5}>Teléfono: {info.phone_number}</Text>
              <Text style={styles.text5}>Correo Electrónico: {info.email}</Text>
              <Text style={styles.text5}>Ubicación:  {info.calle} {info.numero}, {info.localidad},  {info.provincia}</Text>
              </View>
              ):(
                <View>
              <Text style={styles.text3}>Información del vendedor</Text>
              <Text style={styles.text5}>Teléfono: </Text>
              <Text style={styles.text5}>Correo Electrónico: </Text>
              <Text style={styles.text5}>Ubicación:  </Text>
              </View>
              )}
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    backgroundColor: '#38CB6C',
  },
  container3:{
    width: "100%",
    alignItems:"center",
    justifyContent:"center",
  },
  container4: {
    height: 129,
    marginTop: 20,
  },
  container5:{
    width: "100%",
    alignItems:"flex-start",
    justifyContent:"center",
    marginTop: 20,
    marginLeft: "9%"
  },
  imagecont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -180,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 200,
    shadowColor: '#000',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4B4B4B',
  },
  text2: {
    color: '#A6A6A6',
    fontSize: 14,
    fontWeight: 'normal',
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4B4B4B',
  },
  text4: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4B4B4B',
    marginTop: 5,
  },
  text5: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4B4B4B',
    marginTop: 8,
  },
  ico: {
    height: 16,
    width: 16,
    marginLeft: 2,
  },
});