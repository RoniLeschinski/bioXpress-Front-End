
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import ImgPantComp from './components/ImgPantComp'
import alm from './assets/images/alm.svg'

export default class App extends Component {
 
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Categorías</Text>
        <View style={styles.container2}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scroll} 
        horizontal={true}
        contentContainerStyle={{paddingRight: 30}}
        >
         <ImgPantComp
        img={require("./assets/images/alm.png")}
        txt={"Almacén"}
        /> 
        <ImgPantComp
        img={require("./assets/images/fruveg.png")}
        txt={"Frutas y vegetales"}
        /> 
        <ImgPantComp
        img={require("./assets/images/lac.png")}
        txt={"Lácteos"}
        /> 
        <ImgPantComp
        img={require("./assets/images/car.png")}
        txt={"Carnes"}
        /> 
        <ImgPantComp
        img={require("./assets/images/veg.png")}
        txt={"Vegano"}
        /> 
        <ImgPantComp
        img={require("./assets/images/mas.png")}
        txt={"Ver más"}
        /> 
        </ScrollView>
        </View>
        
        <Text style={styles.texto}>Productos recomendados</Text>
        <Text style={styles.texto}>Ofertas</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  //justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "#ececec",
},
container2:{
  height: 139,
  marginTop: 20,
},
texto:{
  color: "#4B4B4B",
  fontWeight: "bold",
  //fontFamily: "Montserrat-Black",
  fontSize: 24,
  left: 30,
  top: 30,
},
scroll:{
  top:20,
  flex: 1,
  paddingLeft: 5,

},
});

