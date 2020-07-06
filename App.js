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
import {createStackNavigator} from '@react-navigation/stack';
import CHome from './screens/CHome'
import VHome from './screens/VHome'
import Local from './screens/Local'
import Producto from './screens/Producto'


const Main = createStackNavigator();

function CustomHeader(){
  return(
    <Image source={require("./assets/images/logo.png")} style={{width:40, height:40, alignSelf: "center"}}></Image>
  )
}
function BackImage(){
  return(
    <Image source={require("./assets/images/back.png")} style={{width:38, height:38, alignSelf: "center"}}></Image>
  )
}

export default function App() {

    return (
      
        <NavigationContainer>
          <Main.Navigator screenOptions={{
            headerStyle:{
              backgroundColor: "#38CB6C"
            },
            headerTintColor: "#fff",
            title: "",
            headerBackImage: (props) => <BackImage {...props}/>,
            headerTitle: (props) => <CustomHeader {...props}/>
          }}>
            <Main.Screen name="CHome" component={CHome}/>
            <Main.Screen name="Local" component={Local}/>
            <Main.Screen name="Producto" component={Producto}/>
            <Main.Screen name="VHome" component={VHome}/>
          </Main.Navigator>
        </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  button:{
    marginTop:32,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: "center"

  }
});
