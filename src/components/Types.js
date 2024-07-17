import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';

const Types = ({img, text, subText, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        width: '90%',
        height: 120,
        borderRadius: 20,
        backgroundColor: '#FEF6FA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
      {img ? img : null}
      <View style={{flexDirection: 'column', paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 25}}>{text}</Text>
        <Text style={{color: 'black'}}>{subText}</Text>
      </View>
      {selected?  <View
          style={{
            backgroundColor: color.dark_pink,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: 80,
          }}>
          <Image source={images.tick} />
        </View>:null 
        }
    </TouchableOpacity>
  );
};

export default Types;

const styles = StyleSheet.create({});
