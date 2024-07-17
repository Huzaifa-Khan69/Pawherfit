import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import color from '../theme/color';
import BadgesEarned from '../components/BadgesEarned';
import Measurements from '../components/Measurements';

const Journey = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <Image
        source={images.background}
        style={{position: 'absolute', width: '100%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Image
          source={images.profile}
          style={{
            borderRadius: 25,
            borderColor: color.dark_pink,
            borderWidth: 2,
          }}
        />
        <Text
          style={{color: 'black', fontSize: 22, marginLeft: 12, width: '60%'}}>
          Good Morning, Lisa
        </Text>
        <Feather
          name={'settings'}
          size={30}
          color={color.light_pink}
          style={{marginLeft: 30}}
        />
      </View>
      <View>
        <Image
          source={images.Journey}
          style={{width: '100%', position: 'absolute'}}
        />
        <View style={{margin: 30}}>
          <Text style={{color: 'white', fontSize: 35}}>My Journey</Text>
          <Text style={{color: 'white', fontSize: 18}}>
            Track And Review Your Progress
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          height: 250,
          backgroundColor: 'white',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 165,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            paddingLeft: 20,
            fontSize: 18,
            margin: 15,
            width: '100%',
          }}>
          Badges Earned
        </Text>
        <BadgesEarned img={images.trophy} text={'Complete a program'} />
        <BadgesEarned
          img={images.trophy}
          text={'Complete an Advanced Program'}
          imgStyle={{tintColor: color.ligtlightpink}}
        />
        <BadgesEarned
          img={images.fitness_award}
          text={'Increased Weight Lifted'}
        />
        <BadgesEarned
          img={images.apple_fibre}
          text={'Logged in food journal for 1 week'}
          imgStyle={{tintColor: color.dark_pink}}
        />
        <BadgesEarned
          img={images.people_award}
          text={'Posted to the community'}
        />
        <BadgesEarned img={images.people_award} text={'Added a coach'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 250,
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 20,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            marginRight: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              alignSelf: 'center',
              paddingTop: 20,
            }}>
            Weight Loss Progress
          </Text>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
              source={images.graph}
              style={{
                position: 'absolute',
                resizeMode: 'contain',
                width: '85%',
              }}
            />
            <Image
              source={images.curve}
              style={{width: '50%', resizeMode: 'contain'}}
            />
            <Text style={{color: color.grey, marginTop: 50}}>weights</Text>
          </View>
        </View>
        <View
          style={{
            height: 250,
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 20,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            marginLeft: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              width: '50%',
              alignSelf: 'center',
              paddingTop: 20,
            }}>
            Strength Progress
          </Text>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
              source={images.graph}
              style={{
                position: 'absolute',
                width: '85%',
                resizeMode: 'contain',
              }}
            />
            <Image
              source={images.curve}
              style={{width: '50%', resizeMode: 'contain'}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          height: 230,
          backgroundColor: 'white',
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
          marginBottom:20
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 20,
          }}>
          Measurements
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View />
          <Text style={{color: 'black', fontSize: 16}}>Body Part</Text>
          <Text style={{color: 'black', fontSize: 16}}>Starting</Text>
          <Text style={{color: 'black', fontSize: 16}}>Current</Text>
          <Text style={{color: 'black', fontSize: 16}}>Progress</Text>
        </View>
        <Measurements
          img={images.hips}
          bodypart={'Waist'}
          starting={'40 in'}
          current={'37 in'}
          progress={'-2 in'}
        />
        <Measurements
          img={images.hips}
          bodypart={'Bicep'}
          starting={'24 in'}
          current={'25 in'}
          progress={'+1 in'}
        />
        <Measurements
          img={images.hips}
          bodypart={'Hips'}
          starting={'45 in'}
          current={'45 in'}
          progress={'0 in'}
        />
      </View>
    </ScrollView>
  );
};

export default Journey;
