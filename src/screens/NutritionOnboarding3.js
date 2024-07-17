import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Habits from '../components/Habits';
import Button from '../components/Button';

const NutritionOnboarding3 = ({navigation}) => {
  const [selectwater, setselectwater] = useState(false);
  const [selectFibre, setselectFibre] = useState(false);
  const [selectCaffine, setselectCaffine] = useState(false);
  const [selectCravings, setselectCarvings] = useState(false);
  const [selectAlcohol, setselectAlcohol] = useState(false);
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
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
          Any other nutriton habits you're looking for improve?
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Habits
          img={images.water}
          text={'Water Intake'}
          onPress={() => setselectwater(!selectwater)}
          selected={selectwater}
        />
        <Habits
          img={images.fibre}
          text={'Fibre'}
          onPress={() => setselectFibre(!selectFibre)}
          selected={selectFibre}
        />
        <Habits
          img={images.caffine}
          text={'Caffine'}
          onPress={() => setselectCaffine(!selectCaffine)}
          selected={selectCaffine}
        />
        <Habits
          img={images.cravings}
          text={'Cravings'}
          onPress={() => setselectCarvings(!selectCravings)}
          selected={selectCravings}
        />
        <Habits
          img={images.alcohol}
          text={'Alcohol'}
          onPress={() => setselectAlcohol(!selectAlcohol)}
          selected={selectAlcohol}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: 120,
          marginVertical: 140,
        }}>
        <Image source={images.food2} style={{position: 'absolute'}} />
        <Button
          text={'CONTINUE'}
          buttonStyle={{backgroundColor: color.ligtlightpink, height: 50}}
          onPress={() => navigation.navigate('CalculateCalories')}
        />
      </View>
    </ScrollView>
  );
};

export default NutritionOnboarding3;

const styles = StyleSheet.create({});
