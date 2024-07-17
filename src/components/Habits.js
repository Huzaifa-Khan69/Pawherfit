import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';

const Habits = ({img, text, selected,onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        width: '95%',
        height: 100,
        borderRadius: 30,
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 10,
      }}>
      <Image source={img} />
      <Text style={{color: 'black', fontSize: 25, width: '30%'}}>{text}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: color.ligtlightpink,
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          //   borderRadius: 50,
        }}>
        {selected ? <Image source={images.tick} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default Habits;

const styles = StyleSheet.create({});
