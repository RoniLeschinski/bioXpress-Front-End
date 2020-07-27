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
import {NavigationContainer, useLinkProps} from '@react-navigation/native';

export default function Header(props) {
  if (props.screen == 'CHome' || props.screen == 'MiCompra') {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}
            onPress={props.press}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/openMenu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Image
            style={{width: 40, height: 40, alignSelf: 'center'}}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/lupa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (props.screen == 'VHome') {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}
            onPress={props.press}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/openMenu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Image
            style={{width: 40, height: 40, alignSelf: 'center'}}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/campana.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (props.screen == 'other') {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}
            onPress={props.press}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Image
            style={{width: 40, height: 40, alignSelf: 'center'}}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/lupa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (props.screen == 'Login' || props.screen == 'Reg') {
    return (
      <View
        style={{flexDirection: 'row', height: 60, backgroundColor: '#ececec'}}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}
            onPress={props.press}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={require('../assets/images/backgreen.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#38CB6C',
  },
  container2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
  },
  container4: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 15,
  },
});
