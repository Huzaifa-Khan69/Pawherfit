import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../theme/color'
import images from '../assets/images'

const ExerciseDo = ({progress}) => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingHorizontal:5,alignItems:'center'}}>
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
        <Text style={{color:"black",fontSize:18}}>15</Text>
        <Text style={{color:"black",fontSize:18}}>{progress}</Text>
        
    </View>
  )
}

export default ExerciseDo

const styles = StyleSheet.create({})