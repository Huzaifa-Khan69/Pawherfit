import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import Button from '../components/Button'
import color from '../theme/color'

const InitialScreen = ({navigation}) => {
  return (
    <View>
        <View>
      <Image source={images.frontimg} style={{position:"absolute"}}/>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:"120%"
      }}>
      <Text style={{fontSize:36,color:"white"}}>Get Fit, Get Strong, Get Healthy</Text>
      <Button text={"Get Started"}
      onPress={()=>navigation.navigate("About")}
      buttonStyle={{backgroundColor:color.dark_pink}}
      textStyle={{fontSize:22}}/>
      <Button text={"Login"}
      onPress={()=>navigation.navigate("About")}
      textStyle={{fontSize:22}}/>
      </View>
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({})