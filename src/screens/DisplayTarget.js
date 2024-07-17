import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import color from '../theme/color';

const DisplayTarget = ({navigation}) => {
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
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            width: '80%',
          }}>
          Your Target Macros
        </Text>
      </View>
      <Image
        source={images.piechart}
        style={{alignSelf: 'center', marginVertical: 20}}
      />
      <Text style={{color: 'black', fontSize: 20, marginHorizontal: 15}}>
        Goal (% of daily cal intake)
      </Text>
      <View style={{alignItems:"flex-start",justifyContent:"center",marginHorizontal:30}}>
      <View style={{flexDirection:"row",marginVertical:15}}>
        <Image source={images.color1}/>
        <Text style={{color:"black",font:15,marginLeft:15}}>Carbohydrates (73g)</Text>
        <Text style={{color:"black",font:15,marginLeft:50}}>45%</Text>
      </View>
      <View style={{flexDirection:"row",marginVertical:10}}>
        <Image source={images.color2}/>
        <Text style={{color:"black",font:15,marginLeft:15}}>Fat (48)</Text>
        <Text style={{color:"black",font:15,marginLeft:128}}>37%</Text>
      </View>
      <View style={{flexDirection:"row",marginVertical:15}}>
        <Image source={images.color3}/>
        <Text style={{color:"black",font:15,marginLeft:15}}>Protein (116g)</Text>
        <Text style={{color:"black",font:15,marginLeft:85}}>39%</Text>
      </View>
      </View>
      <Button
        text={'CONTINUE'}
        buttonStyle={{
          backgroundColor: color.ligtlightpink,
          alignSelf: 'center',
          height:50,
          width: '85%',
          marginTop:35
        }}
        onPress={()=>navigation.navigate("Done")}
      />
    </View>
  );
};

export default DisplayTarget;
