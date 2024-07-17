import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';

const Thankyou = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <TouchableOpacity onPress={()=>navigation.navigate("GetStarted")}>
      <Text style={{fontSize: 15, color: color.dark_pink}}>
        Yay! You're Done
      </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 35, color: 'black'}}>Thank You</Text>
      <Image source={images.thankyouimg} style={{marginVertical: 50}} />
      <Text
        style={{
          color: color.grey,
          fontSize: 20,
          width: '60%',
          textAlign: 'center',
        }}>
        You're one step closer to a new you!
      </Text>
    </View>
  );
};

export default Thankyou;

const styles = StyleSheet.create({});
