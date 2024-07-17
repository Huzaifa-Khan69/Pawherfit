import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../theme/color'

const FoodJournal = ({icon,text,img}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        width: '95%',
        height: 70,
        borderRadius: 30,
        backgroundColor:"white",
        marginHorizontal:5,
        marginVertical:10
      }}>
      {icon?icon:null}
      <Text style={{color:color.dark_pink, fontSize: 20}}>{text}</Text>
     <Image source={img}/>
    </View>
  )
}

export default FoodJournal

const styles = StyleSheet.create({})