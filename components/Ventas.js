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
import {apiBaseUrl} from '../utils/constants';


export default function Ventas(props) {

  return (
    <TouchableOpacity style={styles.boton} activeOpacity={0.7} onPress={props.press}>
      <View style={styles.container}>
        <FlatList
          data={
            Object.keys(props.prods).length >= 5
              ? props.prods.slice(0, 3)
              : props.prods.slice(0, 4)
          }
          keyExtractor={(item, index) => item.id_product}
          renderItem={({item}) => {
            return <ItemVentas index={item.id_product} img={item.path} />;
          }}
          contentContainerStyle={{
            flex: 1,
            /* numColums:'wrap', */
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
            return (
              <View>
                {Object.keys(props.prods).length >= 5 ? extras : null}
              </View>
            );
          }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>{props.cant} productos</Text>
        <Text style={styles.text2}>
          <NumberFormat
            value={props.price}
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
        <Text style={styles.text3}>{props.name}</Text>
        <Text style={styles.text4}>{props.envio}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: 320,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    marginRight:20 
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
