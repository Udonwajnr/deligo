import React from "react";
import { Text,View ,TouchableWithoutFeedback,Image, StyleSheet} from "react-native";
import { MapPin } from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard=({item})=>{
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback
            onPress={()=>navigation.navigate("Restaurant",{...item})}
        >
            <View
            style={{
                shadowColor:themeColors.bgColor(0.9),
                shadowRadius:7
            }}
            className="mr-6 bg-white rounded-3xl shadow-lg ">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2 text-black">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review) .<Text className="font-semibold">{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                    <MapPin color={'gray'} width={'15'} height={'15'}/>
                    <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:themeColors.bgColor(0.2),
        shadowRadius:7
    }
})

export default RestaurantCard