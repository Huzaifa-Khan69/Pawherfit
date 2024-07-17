import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import color from '../theme/color';
import Types from '../components/Types';
import Button from '../components/Button';

const About = ({navigation}) => {
  const [selectedInactive, setSelectedInactive] = useState(false);
  const [selectedBeginner, setSelectedeBeginner] = useState(false);
  const [selectedIntermediate, setSelectedIntermediate] = useState(false);
  const [selectedItem,setSelectedItem]=useState()
  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />
      <View
        style={{
          width: '90%',
          height: 20,
          backgroundColor: '#F0F0F0',
          alignSelf: 'center',
          marginVertical: 30,
        }}
      />
      <View style={{marginLeft: 15, marginVertical: 10}}>
        <Text style={{color: 'black', fontSize: 30}}>About</Text>
        <Text style={{color: color.grey, width: '80%', marginTop: 8}}>
          Let's Begin With You Giving Us Some Detail About Your Current Activity
          Level.
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Types
          img={<Image source={images.icon1} />}
          text={'I am inactive'}
          subText={'Explore What Inactive Means'}
          onPress={() => [setSelectedInactive(true),setSelectedeBeginner(false),setSelectedIntermediate(false)]}
          selected={selectedInactive}
        />
        <Types
          img={<Image source={images.icon2} />}
          text={'I am beginner'}
          subText={'Explore What Inactive Means'}
          onPress={() =>[setSelectedeBeginner(true),setSelectedInactive(false),setSelectedIntermediate(false)]}
          selected={selectedBeginner}
        />
        <Types
          img={
            <View
              style={{
                backgroundColor: '#EE97C0',
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Image source={images.icon3} />
            </View>
          }
          text={'I am intermediate'}
          subText={'Explore What Inactive Means'}
          onPress={() => [setSelectedIntermediate(true),setSelectedInactive(false),setSelectedeBeginner(false)]}
          selected={selectedIntermediate}
        />
      </View>
      <Button
        text={'Continue'}
        buttonStyle={{
          borderColor: color.light_pink,
          borderWidth: 1,
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
        }}
        textStyle={{color: color.light_pink}}
        onPress={()=>navigation.navigate("Birthday")}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
