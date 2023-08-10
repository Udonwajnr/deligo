import React from 'react'
import { Text,View,Image,TouchableOpacity} from 'react-native'
import { Minus,Plus } from 'react-native-feather'
import { themeColors } from '../theme'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemById } from '../redux/slices/cartSlice'
import { urlFor } from '../../sanity'
const DishRow = ({item}) => {
    const dispatch = useDispatch()
    const totalItems = useSelector(state=>selectCartItemById(state,item._id));

    const handleIncrease =()=>{
        dispatch(addToCart({...item}))
    }

    const handleDecrease =()=>{
        dispatch(removeFromCart({id:item._id}))
    }

  return (
    <View className="flex flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
       <Image source={{uri:urlFor(item.image).url()}} className="rounded-3xl" style={{height:100,width:100}}/>
        <Text>DishRow</Text>
        <View className="flex flex-1 space-y-3">
            <View className="p-3">
                <Text className="text-xl text-black capitalize">{item.name}</Text>
                <Text className="text-gray-700">{item.description}</Text>
            </View>
            <View className="flex-row justify-between pl-3 items-center">
                <Text className="text-gray-700 text-lg font-bold">
                    ${item.price}
                </Text>
                <View className="flex-row items-center">
                    <View className="flex-row items-center">
                        <TouchableOpacity
                        onPress={handleDecrease}
                        disabled={!totalItems.length}
                            className="p-1 rounded-full"
                            style={{backgroundColor:themeColors.bgColor(1)}} 
                        >
                            <Minus strokeWidth={2} height={20} stroke={"white"}/>
                        </TouchableOpacity>
                        <Text className="px-3 text-black">
                            {totalItems.length}       
                        </Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            className="p-1 rounded-full"
                            style={{backgroundColor:themeColors.bgColor(1)}} 
                        >
                            <Plus strokeWidth={2} height={20} stroke={"white"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default DishRow