import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import images from '../assets/images'
import color from '../theme/color'

const Exercise = () => {
  return (
   <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <View
          style={{
            borderColor:color.dark_pink,
            backgroundColor:"white",
            borderWidth:2,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            marginVertical:15
          }}>
          <Image source={images.tick} style={{tintColor:color.dark_pink}} />
        </View>
        <View style={{paddingHorizontal:12}}>
<Text style={{color:"black",fontSize:18}}>Strength 1.0 Home Warm Up</Text>
<Text style={{color:color.grey}}>1 Set 1 Rep</Text>
        </View>
   </TouchableOpacity>
  )
}

export default Exercise

const styles = StyleSheet.create({})