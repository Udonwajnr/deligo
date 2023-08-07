import React from 'react'
import { Text,View } from 'react-native'
import { themeColors } from '../theme'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
    const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={()=> navigation.navigate("Cart")}
        style={{backgroundColor:themeColors.bgColor(1)}}
        className="flex-row justify-between item-center mx-5 rounded-full p-4 py-3 shadow-lg"
        >
            <View style={{backgroundColor:"rgba(225,225,225,0.3)"}} className="p-2 px-4 rounded-full">
                <Text className="font-extrabold text-white text-lg">
                    3
                </Text>
            </View>
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    View Cart
                </Text>
                <Text className="font-extrabold text-white text-lg">
                    ${23}
                </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CartIcon