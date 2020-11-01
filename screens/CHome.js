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
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';
import { Base64 } from 'js-base64';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import ItemCard from '../components/ItemCard';
import Recommended from '../components/Recommended';
import Header from '../components/Header';
import BtnMiCompra from '../components/BtnMiCompra';
import {ProductsService} from '../services/products_service';
import ModalCarrito from './ModalCarrito';
import {AuthContext} from '../src/Context/auth_context';
import {ProductContext} from '../src/Context/product_context';

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

export default function CHome({navigation}) {
<<<<<<< HEAD
  const {
    cantTot,
    setCantTot,
    precioTot,
    setPrecioTot,
    cart,
    setCart,
    cartForBack,
  } = useContext(ProductContext);
  const {token, setToken} = useContext(AuthContext);
=======

  const {cantTot, setCantTot, precioTot, setPrecioTot, cart, setCart, cartForBack} = useContext(ProductContext);
  const {token, setToken, username, setUsername, lastName, setLastName, id, setId, idLocal, setIdLocal, type, setType} = useContext(AuthContext);
>>>>>>> 43b9313bb98f27ca95d0292b6788b9960592137a

  const [recomendados, setRecomendados] = useState([]);
  const [ofertas, setOfertas] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [isLoadingOffer, setLoadingOffer] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const fetchProducts = async () => {
    const service = new ProductsService();
    var products = await service.fetchRecomendedProducts(token);
    setRecomendados(products);
    setLoading(false);
    return products;
  };

  const fetchProductsConPromo = async () => {
    const service = new ProductsService();
    var products = await service.fetchOfferProducts(token);
    setOfertas(products);
    setLoadingOffer(false);
    return products;
  };

  function toPurchase() {
    setModalVisible(false);
    navigation.navigate('EndPurchase1');
  }

  function getUser(){
    let buff = Base64.decode(token.split(".")[1]);
    let data = buff.toString("ascii");
    setType(JSON.parse(data).result.ds_type);
    setUsername(JSON.parse(data).result.first_name);
    setLastName(JSON.parse(data).result.last_name);
    setId(JSON.parse(data).result.id_user);
    if (type == "vendedor"){
      setIdLocal(JSON.parse(data).result.id_store);
    }
    console.log(idLocal)
  }

  useEffect(() => {
    fetchProducts();
    fetchProductsConPromo();
    getUser();
    console.log(recomendados)
  }, [cartForBack]);

  return (
    <ProductContext.Provider
      value={{cantTot, setCantTot, precioTot, setPrecioTot}}>
      <SafeAreaView style={{flex: 1}}>
        <ModalCarrito
          visible={modalVisible}
          press={() => setModalVisible(false)}
          cant={cantTot}
          price={precioTot.toFixed(2)}
          carrito={cart}
          press2={() => toPurchase()}
        />
        <Header
          screen={'CHome'}
          search={() => navigation.navigate('Search')}
          press={() => navigation.openDrawer()}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{
            paddingBottom: 30,
            backgroundColor: '#ececec',
          }}>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />
            <Text style={styles.texto}>Categorías</Text>
            <View style={styles.container2}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.scroll2}
                horizontal={true}
                contentContainerStyle={{paddingRight: 30}}>
                <ImgPantComp
                  img={require('../assets/images/alm.png')}
                  txt={'Almacén'}
                  press={() => navigation.navigate('SelCat', {id: 3})}
                />
                <ImgPantComp
                  img={require('../assets/images/fruveg.png')}
                  txt={'Frutas y vegetales'}
                  press={() => navigation.navigate('SelCat', {id: 1})}
                />
                <ImgPantComp
                  img={require('../assets/images/lac.png')}
                  txt={'Lácteos'}
                  press={() => navigation.navigate('SelCat', {id: 4})}
                />
                <ImgPantComp
                  img={require('../assets/images/car.png')}
                  txt={'Carnes'}
                  press={() => navigation.navigate('SelCat', {id: 5})}
                />
                <ImgPantComp
                  img={require('../assets/images/veg.png')}
                  txt={'Vegano'}
                  press={() => navigation.navigate('SelCat', {id: 2})}
                />
                <ImgPantComp
                  img={require('../assets/images/mas.png')}
                  txt={'Ver más'}
                />
              </ScrollView>
            </View>

            <Text style={styles.texto}>Productos recomendados</Text>
            <View style={styles.container3}>
              {!isLoading ? (
                <FlatList
                  data={recomendados}
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
            <Text style={styles.texto}>Ofertas</Text>
            <View style={styles.container3}>
              <FlatList
                data={ofertas}
                keyExtractor={(item, index) => item.id_product}
                renderItem={({item}) => {
                  return (
                    <ItemCard
                      isChome={true}
                      index={item.id_product}
                      img={item.path}
                      off={item.discount}
                      isOffer={true}
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
            </View>
          </View>
        </ScrollView>
        <BtnMiCompra
          press={() => setModalVisible(true)}
          isChome={true}
          cant={cantTot}
          price={precioTot.toFixed(2)}
        />
      </SafeAreaView>
    </ProductContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    height: 139,
    marginTop: 20,
  },
  container3: {
    height: 129,
    marginTop: 20,
  },
  texto: {
    color: '#4B4B4B',
    fontWeight: 'bold',
    //fontFamily: "Montserrat-Black",
    fontSize: 24,
    marginLeft: 30,
    marginTop: 30,
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
});
