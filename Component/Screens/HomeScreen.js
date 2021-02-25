
import React from 'react';
import {StyleSheet,View,Button,Text,Pressable,FlatList} from 'react-native';
import {CATEGORY} from "./Constant/data";
import Title from "../Typography/Title";
import {TouchableOpacity} from "react-native";



const HomeScreen=(props)=>{

    const buildCategory=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('Products',{categoryId:item.id})} style={styles.card}>
                <Title fontSize={15}>{item.name}</Title>
            </TouchableOpacity>
        )
    }



    return(
        <View style={styles.screen}>
            {/*<Text>Hello World Dipen</Text>*/}
            <View style={styles.category}>
            <Title fontSize={20}>Category </Title>
            </View>
            <FlatList
                horizontal={true}
                data={CATEGORY}
                keyExtractor={(item)=>item.id}
                renderItem={buildCategory}
                // numColumns={4}

            />


        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:90,
    },
    card:{
        height:150,
        width:150,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5,
    },
    category:{
        alignItems: 'center',
        marginVertical:20,
    },
    screen:{
        flex:1,
        backgroundColor:'#dedede',
        padding:5,
    }
})


export default HomeScreen;
