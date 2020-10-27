import React, {Component, useState} from 'react';
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
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import {CustomDrawer} from './components/CustomDrawer';
import CHome from './screens/CHome';
import VHome from './screens/VHome';
import Local from './screens/Local';
import Producto from './screens/Producto';
import Favoritos from './screens/Favoritos';
import MisCompras from './screens/MisCompras';
import Config from './screens/Config';
import MiCompra from './screens/MiCompra';
import Login from './screens/Login';
import Reg from './screens/Reg';
import RegNext from './screens/RegNext';
import VReg from './screens/VReg';
import VRegNext from './screens/VRegNext';
import VRegImg from './screens/VRegImg';
import Intro from './screens/Intro';
import NewPub from './screens/NewPub';
import NewPubNext from './screens/NewPubNext';
import EndPurchase1 from './screens/EndPurchase1';
import EndPurchase2 from './screens/EndPurchase2';
import EndPurchase3 from './screens/EndPurchase3';
import EndCard from './screens/EndCard';
import EndPurchase4 from './screens/EndPurchase4';
import SelCat from './screens/SelCat';
import EndCard from './screens/EndCard';
import {AuthContext} from './src/Context/auth_context';
import {ProductContext} from './src/Context/product_context';
import {CartContext} from './src/Context/cart_context';

const Main = createStackNavigator();
const Drawer = createDrawerNavigator();
/* console.disableYellowBox = false; */

export default function App() {
  const initialArray = [];
  const [token, setToken] = useState();
  const [cantTot, setCantTot] = useState(0);
  const [precioTot, setPrecioTot] = useState(0);
  const [cart, setCart] = useState(initialArray);
  const [cartForBack, setCartForBack] = useState(initialArray);
  const [direc, setDirec] = useState('');
  const [envio, setEnvio] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState();
  const [idLocal, setIdLocal] = useState();
  const [type, setType] = useState();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{token, setToken, username, setUsername, lastName, setLastName, id, setId, idLocal, setIdLocal, type, setType}}>
        <ProductContext.Provider
          value={{
            cantTot,
            setCantTot,
            precioTot,
            setPrecioTot,
            cart,
            setCart,
            cartForBack,
            setCartForBack,
          }}>
          <CartContext.Provider value={{direc, setDirec, envio, setEnvio}}>
            <Drawer.Navigator
              initialRouteName="Intro"
              screenOptions={{headerShown: false}}
              drawerContent={props => <CustomDrawer {...props} />}>
              <Drawer.Screen name="Home Comprador" component={CHome} />
              <Drawer.Screen name="Home Vendedor" component={VHome} />
              <Drawer.Screen name="Favoritos" component={Favoritos} />
              <Drawer.Screen name="Mis Compras" component={MisCompras} />
              <Drawer.Screen name="Configuración" component={Config} />
              <Drawer.Screen name="Producto" component={Producto} />
              <Drawer.Screen name="Local" component={Local} />
              <Drawer.Screen name="MiCompra" component={MiCompra} />
              <Drawer.Screen name="NewPub" component={NewPub} />
              <Drawer.Screen name="NewPubNext" component={NewPubNext} />
              <Drawer.Screen name="EndPurchase1" component={EndPurchase1} />
              <Drawer.Screen name="EndPurchase2" component={EndPurchase2} />
              <Drawer.Screen name="EndPurchase3" component={EndPurchase3} />
              <Drawer.Screen name="EndCard" component={EndCard} />
              <Drawer.Screen name="EndPurchase4" component={EndPurchase4} />
              {/* <Drawer.Screen name="EndCard" component={EndCard} /> */}
              <Drawer.Screen name="SelCat" component={SelCat} />
              <Drawer.Screen name="Intro" component={Intro} />
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="RegNext" component={RegNext} />
              <Drawer.Screen name="Reg" component={Reg} />
              <Drawer.Screen name="VReg" component={VReg} />
              <Drawer.Screen name="VRegImg" component={VRegImg} />
              <Drawer.Screen name="VRegNext" component={VRegNext} />
            </Drawer.Navigator>
          </CartContext.Provider>
        </ProductContext.Provider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#23A6D9',
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center',
  },
});
