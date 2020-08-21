import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {apiBaseUrl} from '../utils/constants';


export default function ItemCard(props) {
  const isOffer = props.isOffer;

  const offerBox = <View style={styles.offerbox} />;

  const offerText = <Text style={styles.txt}>-{props.off}%</Text>;

  const source = apiBaseUrl + '/' + props.img 

  const isChome = props.isChome;


  return (
    <View>
      {isChome ? 
        <TouchableOpacity
          activeOpacity={0.7}
          style={{marginLeft: 20}}
          onPress={props.press}>
          <View style={styles.product}>
            <Image style={styles.img} source={{uri:source}}   />
            {isOffer ? offerBox : null}
            {isOffer ? offerText : null}
          </View>
        </TouchableOpacity>
       : 
        <View
          style={{marginLeft: 0}}>
          <View style={styles.product}>
            <Image style={styles.img} source={props.img} />
            {isOffer ? offerBox : null}
            {isOffer ? offerText : null}
            <TouchableOpacity activeOpacity={0.7} style={{width:22, height:22, position:"absolute", marginLeft:10, marginTop:10,}}>
            <Image source={require('../assets/images/borrar.png')} style={{width:22, height:22}}/>
          </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );

  /* if (props.isCHome == true){
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{marginLeft: 20}}
        onPress={props.press}>
        <View style={styles.product}>
          <Image style={styles.img} source={props.img} />
          {isOffer ? offerBox : null}
          {isOffer ? offerText : null}
        </View>
      </TouchableOpacity>
    )
  }
  else if (props.isCHome == false){
    return (
      <View
        style={{marginLeft: 20}}>
        <View style={styles.product}>
          <TouchableOpacity style={{width:22, height:22, position:"absolute", marginLeft:10, marginTop:10,}}>
            <Image source={require('../assets/images/borrar.png')}/>
          </TouchableOpacity>
          <Image style={styles.img} source={props.img} />
          {isOffer ? offerBox : null}
          {isOffer ? offerText : null}
        </View>
      </View>
    )
  } */
}

const styles = StyleSheet.create({
  product: {
    width: 129,
    height: 129,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    width: 129,
    height: 129,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    right: 4,
    color: '#ffffff',
    textAlign: 'center',
  },
  offerbox: {
    backgroundColor: '#38CB6C',
    height: 42,
    width: 120,
    position: 'absolute',
    transform: [{rotate: '30deg'}],
    marginLeft: 40,
    marginTop: -10,
  },
});
