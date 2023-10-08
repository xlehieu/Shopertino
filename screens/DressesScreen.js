import React, { useState } from 'react'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Text, View,SafeAreaView,ScrollView,StyleSheet} from 'react-native'

const DressesScreen = () => {
    const [dresses] = useState([
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_1.png'),
        },
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_2.png'),
        },
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_3.png'),
        },
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_4.png'),
        },
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_5.png'),
        },
        {
            price:29.99,
            name:'Abignail Ruched Mini Dress - Jade',
            image: require('../assets/image/dress_1.png'),
        },
    ]);
    return (
        <View style={styles.container}>
            <FlatList
                data={dresses}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent:'space-around'
                }}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.productItem}>
                        <View>
                            <Image source={item.image}/>
                            <Text>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default DressesScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16,
    },
});
