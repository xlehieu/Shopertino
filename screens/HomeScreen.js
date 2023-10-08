import React, { useState } from 'react'
import { Text, View ,FlatList,TouchableOpacity,Image,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
const HomeScreen = ()=> {
    const navigation = useNavigation();
    function goToOtherScreen(names){
        categories.map((category)=>{
            if(category.name==names){
                navigation.navigate(names);
            }
        })
    }
    const [categories] = useState([
        {
            image: require('../assets/image/category_1.png'),
            name:'Clothing',
        },
        {
            image: require('../assets/image/category_2.png'),
            name:'Accesories',
        },
        {
            image: require('../assets/image/category_3.png'),
            name:'Shoes',
        },
        {
            image: require('../assets/image/category_4.png'),
            name:'Watches',
        },
        {
            image: require('../assets/image/category_5.png'),
            name:'Bags',
        },
        {
            image: require('../assets/image/category_6.png'),
            name:'Dresses',
        },
    ])
    return (
      <View style={styles.container}>
        <FlatList style={styles.categoriesStyle}
        data={categories}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>goToOtherScreen(item.name)} style={styles.categoriesItem}>
                <Image source={item.image}/>
            </TouchableOpacity>
        )}
        />
      </View>
    )
}


export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    categoriesItem:{
        height:100,
        marginBottom:15,
    },
    image:{
        height:"100%",
        resizeMode:'contain'
    }

});
