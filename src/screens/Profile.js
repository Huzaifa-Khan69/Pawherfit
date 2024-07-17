import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import Button from '../components/Button';
import Update from '../components/Update';
import Target from '../components/Target';

const Profile = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View>
        <Image source={images.background} style={{position: 'absolute'}} />
        <Image
          source={images.girl}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            borderWidth: 5,
            borderColor: color.dark_pink,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity style={{marginTop: 10}}>
            <AntDesign name={'arrowleft'} size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10}}>
            <FontAwesome5 name={'pen'} size={25} color={color.dark_pink} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 150}}>
        <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
          Lisa
        </Text>
        <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
          @Lisa1234
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          height: 120,
          backgroundColor: 'white',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <Text style={{color: 'black', fontSize: 25}}>About Lisa</Text>
        <AntDesign
          name={'pluscircleo'}
          size={35}
          color={color.light_pink}
          style={{marginVertical: 8}}
        />
        <Text style={{color: color.dark_pink}}>Click here To Add</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '92%',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <View style={{width: '50%', alignItems: 'center', marginRight: 5}}>
          <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
            My Coach
          </Text>
          <Image source={images.coach3} />
          <Button
            text={'Follow Katey'}
            textStyle={{color: color.dark_pink}}
            buttonStyle={{
              width: '90%',
              borderColor: color.dark_pink,
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{width: '50%', alignItems: 'center', marginLeft: 5}}>
          <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
            My Posts
          </Text>
          <Image source={images.coach5} />
          <Button
            text={'See Posts'}
            textStyle={{color: color.dark_pink}}
            buttonStyle={{
              width: '90%',
              borderColor: color.dark_pink,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
      <View style={{margin: 15}}>
        <Text style={{color: 'black', fontSize: 25}}>Health Overview</Text>
        <Text style={{color: color.grey, fontSize: 15}}>
          your daily health statistics
        </Text>
      </View>
      <Update />
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <View
          style={{
            height: 250,
            width: '55%',
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
            marginLeft: 5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              alignSelf: 'center',
              paddingTop: 20,
            }}>
            Weight Loss Progress
          </Text>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image source={images.graph} style={{position: 'absolute'}} />
            <Image source={images.curve} />
            <Text style={{color: color.grey, marginTop: 50}}>weights</Text>
          </View>
        </View>
        <View
          style={{
            width: '40%',
            height: 250,
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
              fontSize: 18,
              alignSelf: 'center',
              paddingTop: 20,
            }}>
            Badges Earned
          </Text>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={images.trophy} />
              <Text style={{color: 'black', width: '50%'}}>
                Challenge Award
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
              <Image source={images.fitness_award} />
              <Text style={{color: 'black', width: '50%'}}>Workout Award</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={images.people_award} />
              <Text style={{color: 'black', width: '50%'}}>Social Award</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView horizontal={true} style={{}}>
        <Target
          text={'Calories'}
          subtext={'1126/1525'}
          unit={'kal'}
          img={images.calories}
        />
        <Target
          text={'Fibre'}
          subtext={'3/8'}
          unit={'onces'}
          img={images.apple_fibre}
        />
        <Target
          text={'Fibre'}
          subtext={'4/8'}
          unit={'Glasses'}
          img={images.glass}
        />
      </ScrollView>
      <Text style={{color: 'black', fontSize: 25, marginLeft: 15,marginTop:20}}>
        Has Your Goals Changed?
      </Text>
      <Text
        style={{
          color: color.grey,
          fontSize: 15,
          width: '90%',
          alignSelf: 'center',
        }}>
        If your goals or lifestyle has changed, it is recommended that you
        retake the quiz so we can personalize your plan!
      </Text>
      <Button text={"Retake Quiz"}
      buttonStyle={{backgroundColor:color.ligtlightpink,width:"70%"}}
      onPress={()=>navigation.navigate("NutritionOnboarding1")}/>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
