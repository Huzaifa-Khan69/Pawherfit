import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import Exercise from '../components/Exercise';
import Button from '../components/Button';
import Video, {VideoRef} from 'react-native-video';

const ExerciseOverview = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <TouchableOpacity style={{marginLeft: 12, marginTop: 10}}>
        <AntDesign name={'arrowleft'} size={30} color={'black'} />
      </TouchableOpacity>
      <View style={{}}>
        <Video
          // Can be a URL or a local file.
          source={images.video}
          style={{width: '95%', height: 250,borderRadius:50,alignSelf:"center"}}
          repeat={true}
          controls={true}
        />
        <View style={{marginLeft:15,justifyContent:"center",...StyleSheet.absoluteFillObject}}>
          <Text style={{color:"white",fontSize:30}}>Day 5 Hit</Text>
        </View>
      </View>
      {/* <Image source={images.trainer} style={{alignSelf: 'center'}} /> */}
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
        }}>
        <View style={{width: '90%', margin: 15}}>
          <Text style={{fontSize: 25, color: 'black'}}>Exercise Overview</Text>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            This is a list of exercises included in your workout today
          </Text>
        </View>
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </View>
      <Button
        text={'Resume Workout'}
        buttonStyle={{
          backgroundColor: color.ligtlightpink,
          borderWidth: 1,
          alignSelf: 'center',
          borderColor: 'white',
          marginVertical: 30,
        }}
        textStyle={{fontWeight: '400'}}
        onPress={() => navigation.navigate('Workout')}
      />
    </ScrollView>
  );
};

export default ExerciseOverview;

const styles = StyleSheet.create({});
