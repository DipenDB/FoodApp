
import React from 'react';
import {StyleSheet,View,Button} from 'react-native';
import Title from "../Typography/Title";
import {CATEGORY, PRODUCT} from "./Constant/data";


const ProductScreen=(props)=>{

    const product = PRODUCT.find(product=>product.id===props.route.params.productId)

    const category = CATEGORY.find(category=>category.id===product.category)


    return(
        <View>
            <View style={{marginVertical:20,alignSelf:'center'}}>
                <Title fontSize={25} >Category Id : {props.route.params.productId}</Title>
            </View>

            <Title>Id:{product.id}</Title>
            <Title>Name : {product.name}</Title>
            <Title>Category Id:{product.category}</Title>
            <Title>Category Name:{category.name}</Title>
            <Title>Price: {product.price}</Title>

            <Button title="Go Back" onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}
const styles = StyleSheet.create({

})


export default ProductScreen;
