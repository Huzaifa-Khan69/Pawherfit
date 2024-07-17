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
import Update from '../components/Update';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';
import Button from '../components/Button';

const GetStarted = ({navigation}) => {
  const trainer = [
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
    {img: images.trainer},
  ];
  const recommended_programs = [
    {img: images.program1},
    {img: images.program2},
    {img: images.program1},
    {img: images.program2},
    {img: images.program1},
    {img: images.program2},
  ];
  const program = [
    {text: 'Home'},
    {text: 'Gym'},
    {text: 'Bikini Body'},
    {text: 'Home'},
    {text: 'Strength'},
    {text: 'Post Body'},
    {text: 'Advenced'},
    {text: 'Strength'},
  ];
  const coaches = [
    {img: images.coach1, name: 'Cindy'},
    {img: images.coach2, name: 'Kat'},
    {img: images.coach3, name: 'Katey'},
    {img: images.coach4, name: 'Laura'},
    {img: images.coach5, name: 'Sama'},
  ];
  const [selectedProgram, setSelectedProgram] = useState();
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
        <Image source={images.profile} />
        <Text style={{color: 'black', fontSize: 25, marginLeft: 12}}>
          Good Morning, Lisa
        </Text>
      </View>
      <Update />
      <View style={{width: '90%', margin: 15}}>
        <Text style={{fontSize: 25, color: 'black'}}>Your Next Workout</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ExerciseOverview")}>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            Start where you left off
          </Text>
        </TouchableOpacity>
      </View>
      <Carousel
        loop
        width={360}
        height={330}
        autoPlay={true}
        data={trainer}
        scrollAnimationDuration={1000}
        // mode="parallax"
        renderItem={({item}) => (
          <Image source={item.img} style={{marginLeft: 15}} />
        )}
      />
      <View style={{width: '90%', margin: 15}}>
        <Text style={{fontSize: 25, color: 'black'}}>Recommended Programs</Text>
        <TouchableOpacity>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            program that we suggest you try next
          </Text>
        </TouchableOpacity>
      </View>
      <Carousel
        loop
        width={360}
        height={200}
        autoPlay={true}
        data={recommended_programs}
        scrollAnimationDuration={1000}
        // mode="parallax"
        renderItem={({item}) => (
          <Image source={item.img} style={{marginLeft: 15}} />
        )}
      />
      <View style={{width: '90%', margin: 15}}>
        <Text style={{fontSize: 25, color: 'black'}}>Search Programs</Text>
        <TouchableOpacity>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            Select a Program Category
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', width: '100%'}}>
        {program.map((item, index) => {
          return (
            <Button
              key={index}
              text={item.text}
              buttonStyle={{
                borderWidth: 1,
                borderColor: color.dark_pink,
                width: '30%',
                marginHorizontal: 6,
                marginVertical: 8,
              }}
              textStyle={{color: color.dark_pink}}
              onPress={() => setSelectedProgram(index)}
              selected={selectedProgram}
              id={index}
            />
          );
        })}
      </View>
      <View style={{width: '90%', margin: 15}}>
        <Text style={{fontSize: 25, color: 'black'}}>Explore Coaches</Text>
        <TouchableOpacity>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            Find a couch that fits your needs
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {coaches.map((coach, index) => {
          return (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <Image source={coach.img} />
              <Text style={{color: color.dark_pink}}>{coach.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{width: '90%', margin: 15}}>
        <Text style={{fontSize: 25, color: 'black'}}>Explore More</Text>
        <TouchableOpacity>
          <Text style={{color: color.dark_pink, fontSize: 15}}>
            There is so much more to do!
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 100,
        }}>
        <Image
          source={images.Nutrition}
          style={{width: '90%', borderRadius: 30, position: 'absolute'}}
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("NutritionOnboarding1")}
          style={{
            backgroundColor: color.ligtlightpink,
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Nutrition</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 100,
        }}>
        <Image
          source={images.Community}
          style={{width: '90%', borderRadius: 30, position: 'absolute'}}
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("Feed")}
          style={{
            backgroundColor: color.ligtlightpink,
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Community</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
