import React, {Component, useState, useContext, useEffect} from 'react';
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
  Modal,
} from 'react-native';
import Header from '../components/Header';
import ItemCat from '../components/ItemCat';
import {AuthContext} from '../src/Context/auth_context';
import {ProductsService} from '../services/products_service';
import {useLinkProps} from '@react-navigation/native';

export default function SelCat({navigation, route}) {
  const {id} = route.params;
  const {token} = useContext(AuthContext);

  const [categoryProd, setCategoryProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const service = new ProductsService();
    var products = await service.fetchCategory(token, id);
    setCategoryProd(products);
    return products;
  };
  useEffect(() => {
    fetchProducts();
    setIsLoading(false)
  }, [categoryProd]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'other'} press={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={categoryProd}
          keyExtractor={(item, index) => item.id_product}
          renderItem={({item}) => {
            return (
              <ItemCat
                index={item.id_product}
                img={item.path}
                title={item.title}
                price={item.price}
                img={item.path}
                press={() => {
                  navigation.navigate('Producto', {item: item});
                }}
              />
            );
          }}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingBottom: 60,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
  },
});
