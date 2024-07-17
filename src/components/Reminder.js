import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';

const Reminder = ({text,subText,selected,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        width: '45%',
        height: 200,
        backgroundColor:"white",
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:5,
        marginVertical:10
      },selected?{backgroundColor:color.ligtlightpink}:null]}>
      <View style={{flexDirection: 'column',width:"90%"}}>
        <Text style={{fontSize: 30, color: 'black',textAlign:"center",width:"100%"}}>{text}</Text>
        <Text style={{fontSize: 15, color: 'black',textAlign:"center"}}>
          {subText}
        </Text>
      </View>
      {selected?  <View
          style={{
            backgroundColor: color.dark_pink,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginLeft:120
          }}>
          <Image source={images.tick} />
        </View>:null 
        }
    </TouchableOpacity>
  );
};

export default Reminder;

const styles = StyleSheet.create({});
