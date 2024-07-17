import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import Reminder from '../components/Reminder';
import Button from '../components/Button';

const Routine = ({navigation}) => {
  const [morning, setMorning] = useState();
  const [afternoon, setAfternoon] = useState();
  const [evening, setEvening] = useState();
  const [no, setNo] = useState();
  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            width: '70%',
            height: 20,
            backgroundColor: '#DEDEDE',
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '20%',
            height: 20,
            backgroundColor: '#F0F0F0',
            marginTop: 20,
          }}
        />
      </View>

      <TouchableOpacity style={{marginLeft: 12, marginTop: 10}}>
        <AntDesign name={'arrowleft'} size={30} color={'black'} />
      </TouchableOpacity>
      <View style={{marginLeft: 15, marginVertical: 10}}>
        <Text style={{fontSize: 25, color: 'black'}}>
          Tell Us About Your Routine
        </Text>
        <Text
          style={{color: color.grey, fontSize: 15, width: '85%', marginTop: 8}}>
          When would you like to receive reminders?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Reminder
          text={'Morning Routine'}
          subText={'Start your day with a workout'}
          onPress={() => {setMorning(true),setAfternoon(false),setEvening(false),setNo(false)}}
          selected={morning}
        />
        <Reminder
          text={'Afternoon Routine'}
          subText={'Stay active during the day'}
          onPress={()=>{setAfternoon(true),setMorning(false),setEvening(false),setNo(false)}}
          selected={afternoon}
        />
        <Reminder
          text={'Evening Routine'}
          subText={'Relax and unwind with workout'}
          onPress={()=>{setEvening(true),setAfternoon(false),setMorning(false),setNo(false)}}
          selected={evening}
        />
        <Reminder text={'No Reminders'}
        selected={no}
        onPress={()=>{setNo(true),setAfternoon(false),setMorning(false),setEvening(false)}} />
      </View>
      <Button
        text={'Continue'}
        buttonStyle={{
          borderColor: color.light_pink,
          borderWidth: 1,
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
          marginTop: 30,
        }}
        textStyle={{color: color.light_pink}}
        onPress={()=>navigation.navigate("Thankyou")}
      />
    </View>
  );
};

export default Routine;

const styles = StyleSheet.create({});
