import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../theme/color';
import images from '../assets/images';

const Target = ({text,img,subtext,unit}) => {
  return (
    <View
      style={{
        width: 120,
        height: 150,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10
      }}>
      <Text style={{color: 'black', fontSize: 18}}>{text}</Text>
      <Image source={img} style={{marginVertical:15}}/>
      <Text style={{color: 'black', fontSize: 15}}>{subtext}</Text>
      <Text style={{color: color.grey}}>{unit}</Text>
    </View>
  );
};

export default Target;

const styles = StyleSheet.create({});
