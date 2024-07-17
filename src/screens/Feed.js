import {View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../theme/color';
import Feather from 'react-native-vector-icons/Feather';
import User from '../components/User';

const Feed = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor:"white"}}>
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
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholderTextColor={color.grey}
          placeholder="Search"
          style={{
            width: '70%',
            height: 50,
            backgroundColor: 'white',
            marginLeft: 10,
            paddingLeft: 15,
            fontSize: 22,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Feather
          name={'settings'}
          size={30}
          color={color.light_pink}
          style={{marginLeft: 12}}
        />
        </TouchableOpacity>
      </View>
      <Text style={{color: 'black', fontSize: 25, marginLeft: 40}}>
        Community Feed
      </Text>
      <View style={{margin: 15}}>
        <User />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{marginVertical: 15}}>
          <Image source={images.fitness} style={{marginRight: 10}} />
          <Image source={images.fitness} />
        </ScrollView>
      </View>
      <View style={{margin:15}}>
        <User/>
        <Text style={{color:"black",marginTop:10}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry\'s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type book .',
        </Text>
      </View>
      <View style={{margin:15}}>
        <User/>
          <Image source={images.food} style={{marginTop: 10}}/>
      </View>
    </ScrollView>
  );
};

export default Feed;
