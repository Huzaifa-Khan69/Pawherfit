import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Update = () => {
  return (
    <View
      style={{
        width: '90%',
        height: 130,
        borderRadius: 30,
        backgroundColor: 'white',
        paddingLeft:20,
        justifyContent: 'center',
        alignSelf:"center"
      }}>
      <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
        You've Completed 3 Workouts This Week
      </Text>
      <Text style={{color: color.grey, fontSize: 15}}>
        75% of your weekly fitness goal
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            width: '70%',
            height: 15,
            backgroundColor: color.dark_pink,
            marginTop: 20,
            borderRadius:10
          }}
        />
        <View
          style={{
            width: '20%',
            height: 15,
            backgroundColor: '#F0F0F0',
            marginTop: 20,
            borderRadius:10
          }}
        />
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({});
