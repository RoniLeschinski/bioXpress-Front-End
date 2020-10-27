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
  Modal,
} from 'react-native';
import {useLinkProps} from '@react-navigation/native';

export default function ModalCards(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={{flex: 1, backgroundColor: 'rgba(56, 203, 108, 0.75)', justifyContent: "center"}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Seleccionar provincia</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={{
              paddingBottom: 0,
            }}>
            <TouchableOpacity
              style={styles.modalButton}
              activeOpacity={0.7}
              onPress={props.press1}>
              <Text style={styles.modalButtonText}>Crédito</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press2}>
              <Text style={styles.modalButtonText}>
                Débito
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4B4B4B',
    marginVertical: 20,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 0.25,
    overflow: 'hidden',
  },
  modalButton: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  modalButton5: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0.25,
  },
  scroll: {width: '100%', borderTopColor: '#4B4B4B', borderTopWidth: 0.25},
});
