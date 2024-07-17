import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';

const Measurements = ({img, bodypart, starting, current, progress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical:8
      }}>
      <Image source={img} />
      <Text style={{color: 'black'}}>{bodypart}</Text>
      <Text style={{color: 'black'}}>{starting}</Text>
      <Text style={{color: 'black'}}>{current}</Text>
      <Text style={{color: color.dark_pink}}>{progress}</Text>
    </View>
  );
};

export default Measurements;

const styles = StyleSheet.create({});
