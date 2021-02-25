
import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import HomeScreen from "./Screens/HomeScreen";

const Main=()=>{

    return(
        <View style={styles.container}>
            <HomeScreen/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
})

export default Main;
