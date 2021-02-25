
import React from 'react';
import {StyleSheet, View, Button, TouchableOpacity,FlatList,Text} from 'react-native';
import Title from "../Typography/Title";
import {CATEGORY, PRODUCT} from "./Constant/data";


const ProductsScreen=(props)=>{
    // console.log(props)

    const buildCategory=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('Product',{productId:item.id})} style={styles.card}>
                <Title fontSize={15}>{item.name}</Title>
            </TouchableOpacity>
        )
    }

    const products = PRODUCT.filter(product=>product.category===props.route.params.categoryId)

    return(
        <View style={{flex:1}}>
            <View style={{marginVertical:20,alignSelf:'center'}}>
                <Title fontSize={25} >Category Id : {props.route.params.categoryId}</Title>
            </View>

            <FlatList
                horizontal={false}
                data={products}
                keyExtractor={(item)=>item.id}
                renderItem={buildCategory}
                ListEmptyComponent={()=><Text>No Product Avaialable</Text>}

                numColumns={2}

            />


            <Button title="Product Detail"/>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        height:150,
        width:150,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5,

        // marginBottom:10,
        borderRadius:10,
    },
})


export default ProductsScreen;
