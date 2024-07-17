import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Rest = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <TouchableOpacity style={{alignSelf: 'flex-end', margin: 20}}>
        <AntDesign name={'close'} size={30} color={'black'} />
      </TouchableOpacity>

      <View>
        <Image source={images.ladybackground} styles={{position: 'absolute'}} />
        <Image source={images.smallbackground} style={{position: 'absolute'}} />
        <TouchableOpacity style={{position: 'absolute', alignSelf: 'center'}}>
          <Text style={{color: color.dark_pink, fontSize: 30}}>Rest</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            marginTop: 150,
            alignSelf: 'center',
          }}>
          <CountdownCircleTimer
            isPlaying
            size={300}
            trailColor={color.ligtlightpink}
            rotation="counterclockwise"
            strokeWidth={30}
            duration={30}
            colors={[color.dark_pink]}
            colorsTime={[30]}>
            {({remainingTime}) => (
              <Text style={{color: 'black', fontSize: 30}}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>

        {/* <Image
          source={images.round}
          style={{position: 'absolute', marginTop: 100}}
        /> */}
      </View>
      <View style={{marginTop: 80}}>
        <Text style={{color: color.grey, fontWeight: '300', fontSize: 22}}>
          Strength 1.0 Home Warm Up
        </Text>
        <View
          style={{
            marginVertical: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: color.grey, fontSize: 20}}>Sets</Text>
          <Text style={{color: color.grey, fontSize: 20}}>Reps</Text>
          <Text style={{color: color.grey, fontSize: 20}}>Progress</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExerciseOverview')}
          style={{alignItems: 'center'}}>
          <Text
            style={{color: color.dark_pink, fontSize: 20, fontWeight: '300'}}>
            Next Exercise Pull Ups
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rest;

const styles = StyleSheet.create({});
