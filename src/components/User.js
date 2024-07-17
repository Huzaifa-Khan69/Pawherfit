import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'

const User = () => {
  return (
    <View style={{flexDirection:"row"}}>
     <Image source={images.profile_pic}/>
     <View style={{flexDirection:'column',paddingLeft:15}}>
        <Text style={{color:"black",fontSize:18}}>Get Smart Fitness</Text>
        <Text style={{color:"black",fontSize:15}}>Tirana, Albania</Text>
     </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})