import React from 'react'
import { Text,Touchable,TouchableOpacity,View } from 'react-native'
import { featured } from '../../constants'
import { themeColors } from '../theme';
import { ArrowLeft } from 'react-native-feather';

const CartScreen = () => {
    const restaurant = featured.restaurants(0);
  return (
    <View className="bg-white flex-1">
        {/* back button */}
        <View className="relative py-4 shadow-sm">
            <TouchableOpacity
                style={{backgroundColor:themeColors.bgColor(1)}}
                className={"absolute z-10 rounded-full p-1 shadow top-5 left-2"}
            >
                <ArrowLeft/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen