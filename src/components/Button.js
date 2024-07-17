import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Button = ({text, buttonStyle, textStyle, onPress, selected=false, id=true}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: '90%',
          height: 60,
          borderRadius: 10,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 12,
        },
        buttonStyle,
        (selected === id)
          ? {borderColor: color.dark_pink,borderWidth:2}
          : null,
      ]}>
      <Text
        style={[
          {fontSize: 20, color: 'black'},
          textStyle,
          (selected === id)
            ? {fontWeight:"bold"}
            : null,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
