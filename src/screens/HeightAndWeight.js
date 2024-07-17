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
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import Button from '../components/Button';

const HeightAndWeight = ({navigation}) => {
  const height = [
    {
      ft: "5'0",
      cm: 152,
    },
    {
      ft: "5'1",
      cm: 154,
    },
    {
      ft: "5'2",
      cm: 156,
    },
    {
      ft: "5'3",
      cm: 158,
    },
    {
      ft: "5'4",
      cm: 160,
    },
    {
      ft: "5'5",
      cm: 162,
    },
    {
      ft: "5'6",
      cm: 164,
    },
  ];
  const weight = [
    {
      lbs: '138',
      kg: 55,
    },
    {
      lbs: '139',
      kg: 56,
    },
    {
      lbs: '140',
      kg: 57,
    },
    {
      lbs: '141',
      kg: 58,
    },
    {
      lbs: '142',
      kg: 59,
    },
    {
      lbs: '143',
      kg: 60,
    },
    {
      lbs: '144',
      kg: 61,
    },
  ];
  const [selectHeight, setSelectHeight] = useState();
  const [selectWeight, setSelectWeight] = useState();
  const [selectWeightType, setSelectWeightType] = useState('lbs');
  const [selectHeightType, setSelectHeightType] = useState('ft');

  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            width: '40%',
            height: 20,
            backgroundColor: '#DEDEDE',
            marginTop: 20,
          }}
        />
        <View
          style={{
            width: '50%',
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
        <Text style={{fontSize: 22, color: 'black'}}>
          What's Your Weight & Height
        </Text>
      </View>

      <View style={{marginLeft: 15, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Height</Text>
        <View
          style={{
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            flexDirection: 'row',
            width: '90%',
            height: 50,
            justifyContent: 'space-evenly',
            borderRadius: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <TouchableOpacity
            onPress={() => setSelectHeightType('ft')}
            style={
              selectHeightType === 'ft'
                ? {
                    backgroundColor: color.ligtlightpink,
                    width: '50%',
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    width: '50%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }>
            <Text style={{color: 'black', fontSize: 20}}>Ft</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectHeightType('cm')}
            style={
              selectHeightType === 'cm'
                ? {
                    backgroundColor: color.ligtlightpink,
                    width: '50%',
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    width: '50%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }>
            <Text style={{color: 'black', fontSize: 20}}>Cm</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            borderRadius: 50,
            paddingHorizontal: 5,
          }}>
          {height.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setSelectHeight(index)}>
                <Text
                  key={index}
                  style={
                    selectHeight === index
                      ? {
                          color: color.dark_pink,
                          fontSize: 40,
                          marginHorizontal: 10,
                        }
                      : {
                          color: color.grey,
                          fontSize: 30,
                          marginHorizontal: 10,
                        }
                  }>
                  {selectHeightType === 'ft' ? item.ft : item.cm}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={{marginLeft: 15, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Weight</Text>
        <View
          style={{
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            flexDirection: 'row',
            width: '90%',
            height: 50,
            justifyContent: 'space-evenly',
            borderRadius: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <TouchableOpacity
            onPress={() => setSelectWeightType('lbs')}
            style={
              selectWeightType === 'lbs'
                ? {
                    backgroundColor: color.ligtlightpink,
                    width: '50%',
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    width: '50%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }>
            <Text style={{color: 'black', fontSize: 20}}>lbs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectWeightType('kg')}
            style={
              selectWeightType === 'kg'
                ? {
                    backgroundColor: color.ligtlightpink,
                    width: '50%',
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : {
                    width: '50%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
            }>
            <Text style={{color: 'black', fontSize: 20}}>Kg</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            borderRadius: 50,
            paddingHorizontal: 5,
          }}>
          {weight.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setSelectWeight(index)}>
                <Text
                  key={index}
                  style={
                    selectWeight === index
                      ? {
                          color: color.dark_pink,
                          fontSize: 40,
                          marginHorizontal: 10,
                        }
                      : {
                          color: color.grey,
                          fontSize: 30,
                          marginHorizontal: 10,
                        }
                  }>
                  {selectWeightType === 'lbs' ? item.lbs : item.kg}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Button
        text={'Continue'}
        buttonStyle={{
          borderColor: color.light_pink,
          borderWidth: 1,
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
          marginTop: 90,
        }}
        textStyle={{color: color.light_pink}}
        onPress={()=>navigation.navigate("Routine")}
      />
    </View>
  );
};

export default HeightAndWeight;

const styles = StyleSheet.create({});
