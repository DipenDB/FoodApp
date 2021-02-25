

import React from 'react';
import {StyleSheet} from 'react-native';
import {useFonts} from "expo-font";
import {Text} from "react-native";

const Title =(props)=>{
    let [fontLoaded]= useFonts({
        'ubuntu-bold':require('../../assets/Fonts/Ubuntu-Bold.ttf')
    })
    if (!fontLoaded){
        return <Text>Loading....</Text>
    }

    return(
        <Text style={{...styles.title,fontSize:props.fontSize}}>{props.children}</Text>
    )
}

const styles=StyleSheet.create({
    title:{
        fontFamily:'ubuntu-bold',
    },
})

export default Title;
