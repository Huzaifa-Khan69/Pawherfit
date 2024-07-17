import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';

const CalculateCalories = ({navigation}) => {
  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            width: '60%',
            height: 15,
            backgroundColor: '#DEDEDE',
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '30%',
            height: 15,
            backgroundColor: '#F0F0F0',
            marginTop: 20,
          }}
        />
      </View>
      <TouchableOpacity style={{marginLeft: 12, marginTop: 10}}>
        <AntDesign name={'arrowleft'} size={30} color={'black'} />
      </TouchableOpacity>
      <View style={{marginLeft: 15, marginVertical: 8}}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            width: '80%',
          }}>
          How To Calculate Maintaince Calories
        </Text>
      </View>
      <Image source={images.book} style={{marginVertical: 15}} />
      <Text
        style={{
          color: color.dark_pink,
          marginHorizontal: 15,
          width: '80%',
          textAlign: 'justify',
          fontSize: 18,
        }}>
        Based on your nutrition calculation instructed in the video above, what
        are your recommended Maintence Calories?
      </Text>
      <TextInput
        placeholderTextColor={color.grey}
        placeholder="Input Field"
        style={{
          width: '85%',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 20,
          paddingLeft: 10,
          alignSelf: 'center',
          marginVertical: 25,
        }}
      />
      <Button
        text={'CONTINUE'}
        buttonStyle={{
          backgroundColor: color.ligtlightpink,
          alignSelf: 'center',
          height:50,
          width: '85%',
        }}
        onPress={()=>navigation.navigate("DisplayTarget")}
      />
    </View>
  );
};

export default CalculateCalories;

const styles = StyleSheet.create({});
