import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import color from '../theme/color'

const BadgesEarned = ({img,text,imgStyle}) => {
  return (
    <View style={{flexDirection:"row", width:"46%",alignItems:"center",marginVertical:3,marginHorizontal:2}}>
     <Image source={img} style={imgStyle}/>
     <Text style={{color:"black",width:"55%",marginLeft:15}}>{text}</Text>
    </View>
  )
}

export default BadgesEarned

const styles = StyleSheet.create({})