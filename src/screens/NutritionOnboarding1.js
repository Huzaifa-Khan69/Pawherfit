import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Nutritioncart from '../components/Nutritioncart';
import Button from '../components/Button';

const NutritionOnboarding1 = ({navigation}) => {
  const [selectbodyfat, setselectbodyfat] = useState();
  const [selectbuildmuscle, setselectbuildmuscle] = useState();
  const [selectbodyfatandbuildmuscle, setselectbodyfatandbuildmuscle] =
    useState();
  const [selectmaintainfigure, setselectmaintainfigure] = useState();
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
        <Text style={{fontSize: 25, color: 'black'}}>Nutrition Onboarding</Text>
        <Text
          style={{
            color: color.dark_pink,
            fontSize: 16,
            width: '80%',
            marginTop: 12,
          }}>
          Okay,first question.
        </Text>
        <Text style={{color: color.dark_pink, fontSize: 16, width: '80%'}}>
          What is your Program Goal?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Nutritioncart
          img={images.looseweight}
          text={'Lose Bodyfat'}
          onPress={() => {
            setselectbodyfat(true),
              setselectbuildmuscle(false),
              setselectbodyfatandbuildmuscle(false),
              setselectmaintainfigure(false);
          }}
          selected={selectbodyfat}
        />
        <Nutritioncart img={images.buildmuscle} text={'Build Muscle'}onPress={() => {
            setselectbodyfat(false),
              setselectbuildmuscle(true),
              setselectbodyfatandbuildmuscle(false),
              setselectmaintainfigure(false);
          }} 
          selected={selectbuildmuscle}/>
        <Nutritioncart
          img={images.looseWeightandbuildMuscle}
          text={'Lose fat & Build Muscle'}
          onPress={() => {
            setselectbodyfat(false),
              setselectbuildmuscle(false),
              setselectbodyfatandbuildmuscle(true),
              setselectmaintainfigure(false);
          }}
          selected={selectbodyfatandbuildmuscle}
        />
        <Nutritioncart
          img={images.maintainfigure}
          text={'Maintain My Figure'}
          onPress={() => {
            setselectbodyfat(false),
              setselectbuildmuscle(false),
              setselectbodyfatandbuildmuscle(false),
              setselectmaintainfigure(true);
          }}
          selected={selectmaintainfigure}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 125,
        }}>
        <Image source={images.food1} style={{position: 'absolute'}} />
        <Button
          text={'CONTINUE'}
          buttonStyle={{backgroundColor: color.ligtlightpink, height: 50}}
          onPress={() => navigation.navigate('NutritionOnboarding2')}
        />
      </View>
    </View>
  );
};

export default NutritionOnboarding1;

const styles = StyleSheet.create({});
