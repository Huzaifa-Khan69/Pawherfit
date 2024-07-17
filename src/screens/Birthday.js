import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Button from '../components/Button';
import DatePicker from 'react-native-date-picker';

const Birthday = ({navigation}) => {
  const [selected, setSelected] = useState();
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            width: '20%',
            height: 20,
            backgroundColor: '#DEDEDE',
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '70%',
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
          When is your birthday?
        </Text>
        <Text
          style={{color: color.grey, fontSize: 16, width: '80%', marginTop: 8}}>
          Help us determine the best programs for you..
        </Text>
      </View>

      <DatePicker
        style={{
          backgroundColor: color.ligtlightpink,
          alignSelf: 'center',
          marginTop: 50,
        }}
        mode="date"
        date={date}
        onDateChange={setDate}
        dividerColor={color.dark_pink}
      />
      {/* <Calendar
        style={{
          height: 350,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 30,
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            selectedColor: color.ligtlightpink,
          },
        }}
      /> */}
      <Button
        text={'Continue'}
        buttonStyle={{
          borderColor: color.light_pink,
          borderWidth: 1,
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
          marginTop: 80,
        }}
        textStyle={{color: color.light_pink}}
        onPress={() => navigation.navigate('HeightAndWeight')}
      />
    </View>
  );
};

export default Birthday;

const styles = StyleSheet.create({});
