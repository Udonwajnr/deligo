import React,{useState} from 'react'
import { Text,View ,ScrollView, TouchableOpacity,Image} from 'react-native'
import { categories } from '../../constants'

const Categories = () => {
  const [activeCategory,setActiveCategory] = useState(null)
  return (
    <View>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        >

        {
          categories.map((category,index)=>{
            let isActive = category.id == activeCategory;
            let btnClass = isActive?"bg-gray-600":"text-gray-500"
            let textClass = isActive?"font-semibold text-gray-800":"text-gray-500"
            console.log(isActive)
            return(
              <View key={index} className={"flex justify-center items-center mr-6"}>
                <TouchableOpacity
                onPress={()=>setActiveCategory(category.id)}
                  className={`p-1 rounded-full shadow bg-gray-200 flex justify-center ${btnClass} ` }
                >
                  <Image style={{width:45,height:45}}
                    source={category.image}
                    className="m-auto"
                  />
                </TouchableOpacity>
                  <Text className={`text-sm ${textClass}`} >{category.name}</Text>
              </View>
            )
          })
        }
        </ScrollView>
    </View>
  )
}

export default Categories