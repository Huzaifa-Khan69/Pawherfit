import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Rating, AirbnbRating} from 'react-native-ratings';
import FoodJournal from '../components/FoodJournal';

const FoodUpdate = ({navigation}) => {
  return (
    <ScrollView>
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
            backgroundColor: color.dark_pink,
            borderRadius: 25,
            width: 50,
            height: 50,
          }}
        />
        <Text
          style={{color: 'black', fontSize: 22, marginLeft: 12, width: '60%'}}>
          Good Morning, Lisa
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Feather
          name={'settings'}
          size={30}
          color={color.light_pink}
          style={{marginLeft: 30}}
        />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View
          style={{
            backgroundColor: 'white',
            height: 260,
            borderRadius: 20,
            width: 320,
            alignSelf: 'center',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              textAlign: 'center',
              marginVertical: 20,
            }}>
            Calories
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 60,
            }}>
            <Image
              source={images.round}
              style={{width: 180, height: 180, position: 'absolute'}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                width: 90,
                textAlign: 'center',
              }}>
              253 Cal Remaining
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 260,
            borderRadius: 20,
            width: 320,
            alignSelf: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 120,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 8,
              }}>
              <Image
                source={images.purplecircle}
                style={{width: 80, height: 80, position: 'absolute'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  width: 90,
                  textAlign: 'center',
                }}>
                67%
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.bluecircle}
                style={{width: 80, height: 80, position: 'absolute'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  width: 90,
                  textAlign: 'center',
                }}>
                67%
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 8,
              }}>
              <Image
                source={images.redcircle}
                style={{width: 80, height: 80, position: 'absolute'}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  width: 90,
                  textAlign: 'center',
                }}>
                67%
              </Text>
            </View>
          </View>
          <View style={{flexDirection:"row",marginTop: 50,
              justifyContent: 'center',}}>
            <Text style={{color: 'black', fontSize: 16,marginHorizontal:15}}>carbs (73g)</Text>
            <Text style={{color: 'black', fontSize: 16}}>Fats (48g)</Text>
            <Text style={{color: 'black', fontSize: 16,marginHorizontal:15}}>Protein (115g)</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 20,
        }}>
        <View
          style={{
            width: '48%',
            height: 120,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginHorizontal: 5,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Water Intake</Text>
          <AntDesign
            name={'pluscircleo'}
            size={30}
            color={color.dark_pink}
            style={{marginVertical: 5}}
          />
          <Rating
            imageSize={15}
            type="custom"
            ratingCount={10}
            ratingImage={images.water_drop}
            ratingColor={color.dark_pink}
            style={{paddingVertical: 5}}
          />
        </View>

        <View
          style={{
            width: '48%',
            height: 120,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginHorizontal: 5,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Sleep Tracker</Text>
          <AntDesign
            name={'pluscircleo'}
            size={30}
            color={color.dark_pink}
            style={{marginVertical: 5}}
          />
          <Rating
            imageSize={15}
            type="custom"
            ratingCount={10}
            ratingImage={images.clock}
            ratingColor={color.dark_pink}
            style={{paddingVertical: 5}}
          />
        </View>
      </View>
      <View style={{marginLeft: 15, marginVertical: 10}}>
        <Text style={{color: 'black', fontSize: 18}}>Log in Food Journal</Text>
        <FoodJournal
          icon={
            <AntDesign name={'pluscircleo'} size={30} color={color.dark_pink} />
          }
          text={'Add Breakfast'}
          img={images.breakfast}
        />
        <FoodJournal
          icon={
            <AntDesign name={'pluscircleo'} size={30} color={color.dark_pink} />
          }
          text={'Add Lunch'}
          img={images.lunch}
        />
        <FoodJournal
          icon={
            <AntDesign name={'pluscircleo'} size={30} color={color.dark_pink} />
          }
          text={'Add Dinner'}
          img={images.dinner}
        />
      </View>
    </ScrollView>
  );
};

export default FoodUpdate;

const styles = StyleSheet.create({});
