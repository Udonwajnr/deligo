import React, { useState } from 'react'
import { Text,View,StyleSheet,Image,SafeAreaView, TouchableOpacity } from 'react-native'
import { featured } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import MapView,{Marker} from 'react-native-maps'
import { themeColors } from '../theme'
import { Phone, X } from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../redux/slices/cartSlice'
import { selectRestaurant } from '../redux/slices/restaurantSlice'

const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    console.log(restaurant)

    const cancelOrder =()=>{
        navigation.navigate("Home")
        dispatch(emptyCart());
    }

  return (
    <SafeAreaView className="flex-1">
        <MapView
        style={{flex:1}}
        // onLayout={onMapReady} 
        initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.lng,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        mapType='standard'
        >
        <Marker
            coordinate={{
                latitude:restaurant.lat,
                longitude:restaurant.lng
            }}
            title={restaurant.name}
            description={restaurant.description}
            className="text-black"
            pinColor={themeColors.bgColor(1)}
        />
        </MapView>
        <View className="rounded-t-3xl  bg-white relative">
            <View className="flex-row justify-between px-5 pt-10"> 
                <View>
                    <Text className="text-lg text-black">
                        Estimated Arrival
                    </Text>
                    <Text className="text-3xl font-extrabold text-gray-700">
                        20-30 Minutes
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold">
                        Your order is on its way! 
                    </Text>
                </View>
                <Image className="w-24 h-24" source={require("../assets/images/bikeGuy2.gif")}/>
            </View>    
        </View>    
        <View style={{backgroundColor:themeColors.bgColor(0.8)}} className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View className="p-1 rounded-full" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
                <Image className="h-16 w-16 rounded-full" source={require("../assets/images/deliveryGuy.png")}/>
            </View>
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">
                    Syed Noman
                </Text>
                <Text className="font-semibold font-bold text-white">
                    Your Rider
                </Text>
            </View>

            <View className="flex-row items-center space-x-3 mr-3">
                <TouchableOpacity className="bg-white p-2 rounded-full">
                    <Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)}/>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white p-2 rounded-full"
                 onPress={cancelOrder}>
                    <X strokeWidth={4} stroke={"red"}/>
                </TouchableOpacity>
            </View>
        </View>   
    </SafeAreaView>
  )
}

export default DeliveryScreen