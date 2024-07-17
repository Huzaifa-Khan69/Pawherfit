import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Nutritioncart = ({onPress, text, img,selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        width: '40%',
        height: 150,
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 8,
      },selected?{backgroundColor:"#FEF6FA"}:null]}>
      <Image source={img} style={{position: 'absolute',}} />
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          textAlign: 'center',
          width: '90%',
          fontWeight:"300"
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Nutritioncart;

const styles = StyleSheet.create({});
