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
  TextInput,
  Keyboard,
} from 'react-native';

export default function Input(props) {
  if (props.isEmail == true) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <TextInput
            style={styles.input}
            selectionColor="#9de0b5"
            keyboardType="email-address"
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={Keyboard.dismiss}
            /* value={props.valor}
            onChangeText={email => props.textInputChange('email', email)} */
          />
          {props.isLog ? (
            <TouchableOpacity activeOpacity={0.7} style={{marginTop: 15}}>
              <Text style={styles.textbutton}>Quiero usar mi teléfono</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  } else if (props.isPass == true) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <TextInput
            style={styles.input}
            selectionColor="#9de0b5"
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={Keyboard.dismiss}
          />
          {props.isLog ? (
            <TouchableOpacity activeOpacity={0.7} style={{marginTop: 15}}>
              <Text style={styles.textbutton}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  } else if (props.name == true) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <TextInput
            style={styles.input}
            selectionColor="#9de0b5"
            keyboardType="default"
            autoCapitalize="words"
            blurOnSubmit={false}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container2: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  textbutton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#38CB6C',
    width: '100%',
  },
});
