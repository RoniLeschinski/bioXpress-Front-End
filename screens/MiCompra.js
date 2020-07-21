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
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header'
import BtnMiCompra from '../components/BtnMiCompra'


export default function MiCompra({navigation}){
    return(
        <SafeAreaView style={{flex:1}}>
            <Header screen={"MiCompra"} press={() => navigation.openDrawer()}/>
            <BtnMiCompra isChome={false} press={() => navigation.goBack()}/>
            <ScrollView>
                
            </ScrollView>
            <View style={{width:"100%", height:120, alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
                <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
                    <Text style={{color:"#fff", fontWeight:"bold", fontSize:26}}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
boton:{
    backgroundColor:"#38CB6C",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    width:"90%",
    height:85,

},
});