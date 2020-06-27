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
import ImgPantComp from './components/ImgPantComp';
import OfferProd from './components/OfferProd';

var recs = [
  {
    key: 0,
    img: require('./assets/images/products/huevos.png'),
  },
  {
    key: 1,
    img: require('./assets/images/products/sup.png'),
  },
  {
    key: 2,
    img: require('./assets/images/products/huevos.png'),
  },
  {
    key: 3,
    img: require('./assets/images/products/sup.png'),
  },
];

var offer = [
  {
    key: 0,
    img: require('./assets/images/products/manz.png'),
    off: 30,
  },
  {
    key: 1,
    img: require('./assets/images/products/jug.png'),
    off: 20,
  },
  {
    key: 2,
    img: require('./assets/images/products/manz.png'),
    off: 30,
  },
  {
    key: 3,
    img: require('./assets/images/products/jug.png'),
    off: 20,
  },
];

export default class App extends Component {
  recs = ({item, index}) => {
    if (item.empty === true) {
      return <View />;
    }
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{height: 129, marginLeft: 20}}>
        <Image key={index} source={item.img} style={styles.product} />
      </TouchableOpacity>
    );
  };
  offerComp = ({item, index}) => {
    if (item.empty === true) {
      return <View />;
    }
    return (
      <View style={{marginLeft: 20}}>
        <OfferProd key={index} img={item.img} off={item.off} />
      </View>
    );
  };

  render() {
    return (
      <ScrollView
      style={styles.scroll}
        contentContainerStyle={{paddingBottom: 50, backgroundColor: '#ececec'}}>
        <View style={styles.container}>
          <Text style={styles.texto}>Categorías</Text>
          <View style={styles.container2}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={styles.scroll2}
              horizontal={true}
              contentContainerStyle={{paddingRight: 30}}>
              <ImgPantComp
                img={require('./assets/images/alm.png')}
                txt={'Almacén'}
              />
              <ImgPantComp
                img={require('./assets/images/fruveg.png')}
                txt={'Frutas y vegetales'}
              />
              <ImgPantComp
                img={require('./assets/images/lac.png')}
                txt={'Lácteos'}
              />
              <ImgPantComp
                img={require('./assets/images/car.png')}
                txt={'Carnes'}
              />
              <ImgPantComp
                img={require('./assets/images/veg.png')}
                txt={'Vegano'}
              />
              <ImgPantComp
                img={require('./assets/images/mas.png')}
                txt={'Ver más'}
              />
            </ScrollView>
          </View>

          <Text style={styles.texto}>Productos recomendados</Text>
          <View style={styles.container3}>
            <FlatList
              data={recs}
              renderItem={this.recs}
              contentContainerStyle={{
                paddingRight: 30,
                paddingLeft: 10,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}></FlatList>
          </View>
          <Text style={styles.texto}>Ofertas</Text>
          <View style={styles.container3}>
            <FlatList
              data={offer}
              renderItem={this.offerComp}
              contentContainerStyle={{
                paddingRight: 30,
                paddingLeft: 10,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}></FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
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
    paddingLeft: 5,
  },
  scroll2:{
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
