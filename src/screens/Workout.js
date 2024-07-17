import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import ExerciseDo from '../components/ExerciseDo';
import WeightInput from '../components/WeightInput';
import Button from '../components/Button';
import TimeAndPause from '../components/TimeAndPause';

const Workout = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <TouchableOpacity style={{marginLeft: 12, marginTop: 10}}>
        <AntDesign name={'arrowleft'} size={30} color={'black'} />
      </TouchableOpacity>
      <Image
        source={images.workout}
        style={{alignSelf: 'center', width: '95%', resizeMode: 'contain'}}
      />
      <View
        style={{
          width: '90%',
          backgroundColor: '#FEF6FA',
          borderRadius: 20,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
          alignSelf: 'center',
          marginTop: 30,
          paddingVertical: 20,
        }}>
        <View style={{width: '90%', margin: 15}}>
          <Text style={{fontSize: 20, color: 'black'}}>
            Strength 1.0 Home Warm Up
          </Text>
          <Text style={{color: color.grey, fontSize: 15}}>1 Set 1 Rep</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: color.grey, fontSize: 20}}>Sets</Text>
          <Text style={{color: color.grey, fontSize: 20}}>Reps</Text>
          <Text style={{color: color.grey, fontSize: 20}}>Progress</Text>
        </View>
        <ExerciseDo progress={'Done!'} />
        <ExerciseDo progress={'Go!'} />
        <ExerciseDo progress={'_ _ _ _'} />
        <TimeAndPause/>
      </View>
      <WeightInput />
      <Button
        text={'Next Exercise'}
        buttonStyle={{
          backgroundColor: color.ligtlightpink,
          borderWidth: 1,
          alignSelf: 'center',
          borderColor: 'white',
          marginVertical: 30,
        }}
        textStyle={{fontWeight: '400'}}
        onPress={()=>navigation.navigate("Rest")}
      />
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({});
