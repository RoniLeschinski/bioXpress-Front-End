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
import NumberFormat from 'react-number-format';
import ItemVentas from './ItemVentas';
import ExtraItems from './ExtraItems';

var prods = [
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
    img: require('../assets/images/products/manz.png'),
    titulo: 'Manzanas',
    precio: 250,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Manzanas provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
  {
    key: 2,
    img: require('../assets/images/products/verdura.png'),
    titulo: 'Verduras',
    precio: 200,
    isOffer: false,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Verduras provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 3,
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
    key: 4,
    img: require('../assets/images/products/manz.png'),
    titulo: 'Manzanas',
    precio: 250,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Manzanas provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
  {
    key: 5,
    img: require('../assets/images/products/verdura.png'),
    titulo: 'Verduras',
    precio: 200,
    isOffer: false,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Verduras provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 6,
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
    key: 7,
    img: require('../assets/images/products/manz.png'),
    titulo: 'Manzanas',
    precio: 250,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Manzanas provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
    isOffer: false,
  },
];

function Precio(item) {
  return item.precio;
}

function sum(prev, next) {
  return prev + next;
}

const Ventas = props => (
  <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
    <View style={styles.container}>
      <FlatList
        data={
          Object.keys(props.prods).length >= 5 ? props.prods.slice(0, 3) : props.prods.slice(0, 4)
        }
        renderItem={({item}) => {
          return <ItemVentas index={item.key} img={props.img} />;
        }}
        contentContainerStyle={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
        style={{height: '100%', width: '100%'}}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={({item}) => {
          const extras = (
            <ExtraItems prodLeft={Object.keys(props.prods).length - 3} />
          );
          return <View>{Object.keys(props.prods).length >= 5 ? extras : null}</View>;
        }}
      />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>{props.cant} productos</Text>
      <Text style={styles.text2}>
        <NumberFormat
          value={props.prods.map(Precio).reduce(sum)}
          displayType={'text'}
          thousandSeparator={'.'}
          decimalSeparator={','}
          prefix={'$'}
          renderText={value => <Text>{value}</Text>}
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </Text>
      <Text style={styles.text3}>props.name</Text>
      <Text style={styles.text4}>props.envio</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  boton: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '85%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  container: {
    width: '45%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '55%',
    height: '100%',
  },
  text1: {
    fontWeight: '600',
    fontSize: 18,
    color: '#4B4B4B',
    marginVertical: 1,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#4B4B4B',
    marginVertical: 1,
  },
  text3: {
    fontWeight: '500',
    fontSize: 18,
    color: '#A6A6A6',
    marginVertical: 1,
  },
  text4: {
    fontWeight: '500',
    fontSize: 18,
    color: '#4B4B4B',
    marginVertical: 1,
  },
});

export default Ventas;
