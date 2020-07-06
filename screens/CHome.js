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
  TouchableNativeFeedbackBase,
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import OfferProd from '../components/OfferProd';
import Recommended from '../components/Recommended';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
//import {recos} from "../utilities/fakeInfo.json";

 var recos = [
  {
    key: 0,
    img: require('../assets/images/products/huevos.png'),
    desc: "Docena de huevos pastoriles",
    precio: "$420"
  },
  {
    key: 1,
    img: require('../assets/images/products/sup.png'),
    desc: "Suprema de pollo",
    precio: "$300"
  },
  {
    key: 2,
    img: require('../assets/images/products/huevos.png'),
    desc: "Docena de huevos pastoriles",
    precio: "$420"
  },
  {
    key: 3,
    img: require('../assets/images/products/sup.png'),
    desc: "Suprema de pollo",
    precio: "$300"
  },
]; 

var offer = [
  {
    key: 0,
    img: require('../assets/images/products/manz.png'),
    off: 30,
  },
  {
    key: 1,
    img: require('../assets/images/products/jug.png'),
    off: 20,
  },
  {
    key: 2,
    img: require('../assets/images/products/manz.png'),
    off: 30,
  },
  {
    key: 3,
    img: require('../assets/images/products/jug.png'),
    off: 20,
  },
];

function recs({navigation, item, index}) {
  if (item.empty === true) {
    return <View />;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{height: 129, marginLeft: 20}}
      onPress={() => {
        navigation.navigate('Producto');
      }}>
      <Image key={index} source={item.img} style={styles.product} />
    </TouchableOpacity>
  );
}

function offerComp({item, index, navigation}) {
  if (item.empty === true) {
    return <View />;
  }
  return (
    <View style={{marginLeft: 20}}>
      <OfferProd
        key={index}
        img={item.img}
        off={item.off}
        onPress={() => {
          navigation.navigate('Producto');
        }}
      />
    </View>
  );
}

export default function CHome({navigation}) {

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity>
        <Image source={require('../assets/images/lupa.png')} style={{width:40, height:40}}></Image>
      </TouchableOpacity>
    )
  })
})


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
              img={require('../assets/images/alm.png')}
              txt={'Almacén'}
              press={() => {
                navigation.navigate('Producto');
              }}
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
          <FlatList
            data={recos}
            renderItem={({item}) => {
              return (
                <Recommended
                  index={item.key}
                  img={item.img}
                  press={() => {
                    navigation.navigate('Producto' , {item: item});
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
          />
        </View>
        <Text style={styles.texto}>Ofertas</Text>
        <View style={styles.container3}>
          <FlatList
            data={offer}
            renderItem={offerComp}
            contentContainerStyle={{
              paddingRight: 30,
              paddingLeft: 10,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
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
    paddingLeft: 5,
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
