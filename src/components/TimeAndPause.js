import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../theme/color'
import AntDesign from 'react-native-vector-icons/AntDesign';

const TimeAndPause = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <TouchableOpacity
      style={{
        backgroundColor: color.dark_pink,
        flexDirection: 'column',
        width: '45%',
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 18}}>00:29</Text>
      <Text style={{color: 'white', fontSize: 16}}>Its Go Time!</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: color.dark_pink,
        borderWidth: 1,
        width: '45%',
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AntDesign
        name={'pausecircleo'}
        size={20}
        color={color.dark_pink}
      />
      <Text
        style={{
          color: color.dark_pink,
          fontSize: 18,
          paddingHorizontal: 8,
        }}>
        Pause!
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default TimeAndPause

const styles = StyleSheet.create({})