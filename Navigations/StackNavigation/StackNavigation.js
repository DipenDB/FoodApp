
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../../Component/Screens/HomeScreen";
import ProductsScreen from "../../Component/Screens/ProductsScreen";
import ProductScreen from "../../Component/Screens/ProductScreen";

const HomeStack=createStackNavigator();


const StackNavigator=()=>{
    return(
        <NavigationContainer >
            {/*Home Page*/}
            <HomeStack.Navigator
                mode='modal'   // Optional
                initialRouteName="Home"
                screenOptions={{
                    headerShown:true,
                    headerStyle:{backgroundColor:'#ededed'},
                    headerTintColor:'#006eff',
                    headerTitleStyle:{
                        fontFamily:'ubuntu-bold',
                        // fontSize:30,
                    },
                    headerBackButtonText:'BACK DB',
                    headerBackButtonTextStyle:{
                        fontFamily: 'ubuntu-regular',
                        fontSize: 15,
                    },
                    headerBackTitleStyle:{
                        fontFamily:'ubuntu-regular'
                    }
            }}>



                <HomeStack.Screen name='Home' component={HomeScreen}
                                  options={{title:'Home Screen'


                                  }}/>
                <HomeStack.Screen name='Products' component={ProductsScreen}/>
                <HomeStack.Screen name='Product' component={ProductScreen}/>
            </HomeStack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigator;
