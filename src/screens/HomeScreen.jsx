import React, { useEffect, useState } from 'react'
import { Text,SafeAreaView,StatusBar,View,TextInput, ScrollView} from 'react-native'
import {Search,MapPin,Sliders} from "react-native-feather"
import Categories from '../components/Categories'
import { themeColors } from '../theme'
import FeaturedRow from '../components/FeaturedRow'
import { getFeaturedRestaurants } from '../../api'

const HomeScreen = () => {
    const [featuredRestaurants,setFeaturedRestaurants] = useState([])
    useEffect(()=>{
        getFeaturedRestaurants().then(data=>{
            setFeaturedRestaurants(data)
        })
    },[])
  return (
    <SafeAreaView className={''}>
        {/* come back */}
        <StatusBar barStyle={"dark-content"}/>
        {/* search bar */}
        <View className={"flex-row items-center space-x-2 px-4 pb-2"}>
            {/* come back */}
                <View className="flex-row flex-1 items-center p-1 rounded-full border border-gray-300">
                    <Search height={20} width={25} stroke={"gray"}/>
                    <TextInput placeholderTextColor={"#b6b6b6"}placeholder='Restaurant' className="ml-2 flex-1 text-black" />
                    <View className={"flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300"}>
                        <MapPin stroke={'gray'} height={'20'} width={'20'}/>
                        <Text className={"text-gray-600"}>New York,NYC</Text>
                    </View>
                </View>
                <View style={{backgroundColor:themeColors.bgColor(1)}}  className={"p-3 rounded-full bg-gray-300"}>
                    <Sliders height={20} width={20} strokeWidth={2.5} stroke={'white'}/>
                </View>
        </View>

        {/* main */}
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:20 }}
                >
              {/* Categories */}
              <Categories/>

              {/* featured */}
            <View className="mt-5">
                {
                    featuredRestaurants.map((item,index)=>{
                        return(
                           <FeaturedRow
                            key={index}
                            title={item.name}
                            restaurants={item.restaurants}
                            description={item.description}
                           />
                        )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen 