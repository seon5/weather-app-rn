//import * as Location from 'expo-location';
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get("window");
//console.log(SCREEN_WIDTH);

export default function App() {
  const [location, setLocation]=useState();
  const [ok, setPk]=useState(true);
  // const ask = async () => {
  //   const permission = await Location.requestForegroundPermissionsAsync();
  //   console.log(permission);
  // }
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        horizontal 
        ContentContainerstyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"green"
  },
  city:{
    flex:1,
    //backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center"
  },
  cityName:{
    fontSize:60,
    fontWeight:"500"
  },
  weather:{
    //flex:3,
    backgroundColor:"blue"
  },
  day:{
    width:SCREEN_WIDTH,
    //flex:1,
    //backgroundColor:"teal",
    alignItems:"center"
  },
  temp:{
    marginTop:30,
    fontSize:158,
  },
  description:{
    fontSize:70,
  }
})
 