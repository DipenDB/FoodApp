import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Main from "./Component";
import StackNavigator from "./Navigations/StackNavigation/StackNavigation";
import {loadAsync} from "expo-font";
import {Ionicons} from "@expo/vector-icons";

export default function App() {
    //1st step
    const [isReady,setIsReady]=useState(false);
    //2nd step
    useEffect(()=>{
        result()
        setIsReady(true)
    },[]);
    //3rd Step
    const result = async ()=>{
        await loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            'ubuntu-bold':require('./assets/Fonts/Ubuntu-Bold.ttf'),
            'ubuntu-regular':require('./assets/Fonts/Ubuntu-Regular.ttf'),

            ...Ionicons.font,
        })
    }




  return (
    <View style={styles.container}>
      {/*<StatusBar*/}
      {/*    // animated={true}*/}
      {/*    hidden={true} />*/}
      {/*<Main/>*/}
      <StackNavigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});
