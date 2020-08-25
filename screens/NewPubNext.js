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

export default function NewPubNext({navigation}) {
    return(
        <SafeAreaView>
            <Header screen={'VHome'} press={() => navigation.openDrawer()} />
            <ScrollView
            style={styles.scroll}
            contentContainerStyle={{paddingBottom: 120, backgroundColor: '#ececec'}}
            />
        </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
});