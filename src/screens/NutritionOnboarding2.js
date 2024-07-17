import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import Nutritioncart from '../components/Nutritioncart';
import Button from '../components/Button';

const NutritionOnboarding2 = ({navigation}) => {
  const [selectvegan, setselectvegan] = useState();
  const [selectvegetarian, setselectvegetarian] = useState();
  const [selectketo, setselectketo] = useState();
  const [selectwhatever, setselectehatever] = useState();
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
          Thanks, You're Doing Great!
        </Text>
        <Text style={{color: color.dark_pink, fontSize: 16, width: '80%'}}>
          Are you following a particular diet?
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
          img={images.vegan}
          text={'Vegan'}
          onPress={() => {
            setselectvegan(true),
              setselectvegetarian(false),
              setselectketo(false),
              setselectehatever(false);
          }}
          selected={selectvegan}
        />
        <Nutritioncart img={images.vegetarian} text={'Vegetarian'}  onPress={() => {
            setselectvegan(false),
              setselectvegetarian(true),
              setselectketo(false),
              setselectehatever(false);
          }}
          selected={selectvegetarian}/>
        <Nutritioncart img={images.paleo} text={'Paleo/Keto'}  onPress={() => {
            setselectvegan(false),
              setselectvegetarian(false),
              setselectketo(true),
              setselectehatever(false);
          }}
          selected={selectketo}/>
        <Nutritioncart img={images.Anything} text={'I Eat Whatever I Want'}  onPress={() => {
            setselectvegan(false),
              setselectvegetarian(false),
              setselectketo(false),
              setselectehatever(true);
          }}
          selected={selectwhatever}/>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 120,
        }}>
        <Image
          source={images.food2}
          style={{position: 'absolute', width: '100%', resizeMode: 'contain'}}
        />
        <Button
          text={'CONTINUE'}
          buttonStyle={{backgroundColor: color.ligtlightpink, height: 50}}
          onPress={() => navigation.navigate('NutritionOnboarding3')}
        />
      </View>
    </View>
  );
};

export default NutritionOnboarding2;

const styles = StyleSheet.create({});
