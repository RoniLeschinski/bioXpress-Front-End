import React, {Component, useState, useEffect} from 'react';
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
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import ItemCard from '../components/ItemCard';
import Recommended from '../components/Recommended';
import Header from '../components/Header';
import BtnMiCompra from '../components/BtnMiCompra';
import {ProductsService} from '../services/products_service';

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

var offer = [
  {
    key: 0,
    img: require('../assets/images/products/manz.png'),
    titulo: 'Manzanas',
    precio: 250,
    isOffer: true,
    off: 30,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Manzanas provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 1,
    img: require('../assets/images/products/jug.png'),
    titulo: 'Jugo de Naranja',
    precio: 180,
    isOffer: true,
    off: 20,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Jugo de naranja proveniente de La Pampa, distribuido por COECO y llevado a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 2,
    img: require('../assets/images/products/manz.png'),
    titulo: 'Manzanas',
    precio: 250,
    isOffer: true,
    off: 30,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Manzanas provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 3,
    img: require('../assets/images/products/jug.png'),
    titulo: 'Jugo de Naranja',
    precio: 180,
    isOffer: true,
    off: 20,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Jugo de naranja proveniente de La Pampa, distribuido por COECO y llevado a tu casa PERSONALMENTE por Horacio.',
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

export default function CHome({navigation}) {
  const [recomendados, setRecomendados] = useState([]);
  const [ofertas, setOfertas] = useState([]);


  const [isLoading, setLoading] = useState(true);
  const [isLoadingOffer, setLoadingOffer] = useState(true);


  const fetchProducts = async () => {
    const service = new ProductsService();
    var products = await service.fetchRecomendedProducts();
    setRecomendados(products) 
    setLoading(false)
    return products;
  };

  const fetchProductsConPromo = async () => {
    const service = new ProductsService();
    var products = await service.fetchOfferProducts();
    setOfertas(products) 
    setLoadingOffer(false)
    return products;
  };

  useEffect(() => {
    fetchProducts();
    fetchProductsConPromo();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'CHome'} press={() => navigation.openDrawer()} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{paddingBottom: 30, backgroundColor: '#ececec'}}>
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
                press={() => fetchProducts()}
              />
              <ImgPantComp
                img={require('../assets/images/fruveg.png')}
                txt={'Frutas y vegetales'}
              />
              <ImgPantComp
                img={require('../assets/images/lac.png')}
                txt={'Lácteos'}
              />
              <ImgPantComp
                img={require('../assets/images/car.png')}
                txt={'Carnes'}
              />
              <ImgPantComp
                img={require('../assets/images/veg.png')}
                txt={'Vegano'}
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
              <ItemCard isChome={true}/>
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
        press={() => navigation.navigate('MiCompra')}
        isChome={true}
      />
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
