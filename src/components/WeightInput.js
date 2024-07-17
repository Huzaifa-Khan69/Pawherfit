import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const WeightInput = () => {
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: '#FEF6FA',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        alignSelf: 'center',
        marginTop: 30,
        paddingVertical: 20,
        justifyContent:"center",
        paddingHorizontal:30
      }}>
      <Text style={{color:"black",fontSize:20}}>Enter Weight (lbs) used today</Text>
      <TextInput
      placeholderTextColor={color.grey}
        placeholder="Input: Field"
        style={{width: '100%', backgroundColor: 'white', height: 50,paddingLeft:10,fontSize:18,marginVertical:12}}
      />
      <Text style={{color:color.grey,fontSize:20}}>Weight Last Used</Text>
      <Text style={{color:color.grey,fontSize:18}}>15 lbs</Text>
    </View>
  );
};

export default WeightInput;

const styles = StyleSheet.create({});
